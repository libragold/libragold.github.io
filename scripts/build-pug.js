const { getSlideFolders, ensureDestFolder } = require('./utils');
const glob = require('glob');
const pug = require('pug');
const fs = require('fs');
const path = require('path');

// Process Pug files for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const pugFiles = glob.sync(`${folder}/*.pug`);
  if (pugFiles.length > 0) {
    pugFiles.forEach(file => {
      try {
        const compiledFunction = pug.compileFile(file);
        const html = compiledFunction();
        const destFile = path.join(destFolder, path.basename(file, '.pug') + '.html');
        fs.writeFileSync(destFile, html);
        console.log(`Compiled ${file} to ${destFile}`);
      } catch (error) {
        console.error(`Error compiling ${file}:`, error);
      }
    });
  }
});
