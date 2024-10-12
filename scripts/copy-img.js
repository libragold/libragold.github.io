const { getSlideFolders, ensureDestFolder } = require('./utils');
const path = require('path');
const fs = require('fs-extra');

// Copy 'img' subfolder for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const imgFolder = path.join(folder, 'img');
  if (fs.existsSync(imgFolder) && fs.statSync(imgFolder).isDirectory()) {
    fs.copySync(imgFolder, path.join(destFolder, 'img'));
    console.log(`Copied img folder from ${folder} to ${destFolder}`);
  }
});
