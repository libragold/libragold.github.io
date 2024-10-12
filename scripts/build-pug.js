const { getSlideFolders, ensureDestFolder } = require('./utils');
const { execSync } = require('child_process');
const glob = require('glob');

// Process Pug files for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const pugFiles = glob.sync(`${folder}/*.pug`);
  if (pugFiles.length > 0) {
    try {
      execSync(`pug ${folder}/*.pug --out ${destFolder}`, { stdio: 'inherit' });
      console.log(`Compiled Pug files in ${folder} to ${destFolder}`);
    } catch (error) {
      console.error(`Error compiling Pug files in ${folder}:`, error);
    }
  }
});
