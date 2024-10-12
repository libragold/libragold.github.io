const { getSlideFolders, ensureDestFolder } = require('./utils');
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

// Copy non-Pug files from 'src' subfolder for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const srcFolder = path.join(folder, 'src');
  if (fs.existsSync(srcFolder) && fs.statSync(srcFolder).isDirectory()) {
    const filesToCopy = glob.sync(`${srcFolder}/**/*`, { ignore: `${srcFolder}/**/*.pug` });

    filesToCopy.forEach(file => {
      const relativePath = path.relative(srcFolder, file);
      const destFilePath = path.join(destFolder, 'src', relativePath);
      fs.copySync(file, destFilePath);
      console.log(`Copied ${file} to ${destFilePath}`);
    });
  }
});
