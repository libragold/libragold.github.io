const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

// Constants
const slidesDir = path.join(__dirname, '../assets/slides');
const outputDir = path.join(__dirname, '../static/slides');

// Get all directories directly under /assets/slides, excluding 'layouts'
function getSlideFolders() {
  return glob.sync(`${slidesDir}/*`, { ignore: `${slidesDir}/layouts`, absolute: true })
    .filter(f => fs.statSync(f).isDirectory());
}

// Ensure the destination folder exists
function ensureDestFolder(slideFolder) {
  const folderName = path.basename(slideFolder);
  const destFolder = path.join(outputDir, folderName);
  fs.ensureDirSync(destFolder);
  return destFolder;
}

module.exports = {
  getSlideFolders,
  ensureDestFolder,
};
