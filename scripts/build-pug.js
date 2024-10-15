const { getSlideFolders, ensureDestFolder } = require('./utils');
const glob = require('glob');
const pug = require('pug');
const fs = require('fs');
const path = require('path');
const toml = require('toml');

// Adjust the path to hugo.toml (go one level up from the scripts folder)
const hugoTomlPath = path.resolve(__dirname, '../hugo.toml'); // Keep path definition outside

// Step 1: Read and parse the TOML file in one go
let umamiWebsiteID;
try {
  const tomlContent = fs.readFileSync(hugoTomlPath, 'utf8');
  umamiWebsiteID = toml.parse(tomlContent).params.umamiWebsiteID;
} catch (error) {
  console.error('Error reading or parsing hugo.toml:', error);
  process.exit(1); // Exit script if there's an error with reading or parsing
}

// Step 2: Process Pug files for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const pugFiles = glob.sync(`${folder}/*.pug`);
  if (pugFiles.length > 0) {
    pugFiles.forEach(file => {
      try {
        // Compile Pug files and pass umamiWebsiteID
        const compiledFunction = pug.compileFile(file);
        const html = compiledFunction({ umamiWebsiteID });

        // Write the compiled HTML to the destination folder
        const destFile = path.join(destFolder, path.basename(file, '.pug') + '.html');
        fs.writeFileSync(destFile, html);
        console.log(`Compiled ${file} to ${destFile}`);
      } catch (error) {
        console.error(`Error compiling ${file}:`, error);
      }
    });
  }
});
