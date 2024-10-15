const { getSlideFolders, ensureDestFolder } = require('./utils');
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

// Copy PDF files for each slide folder
getSlideFolders().forEach(folder => {
  const destFolder = ensureDestFolder(folder);

  const pdfFiles = glob.sync(`${folder}/*.pdf`);
  if (pdfFiles.length > 0) {
    pdfFiles.forEach(pdfFile => {
      const pdfFileName = path.basename(pdfFile);
      const destPdfPath = path.join(destFolder, pdfFileName);
      fs.copySync(pdfFile, destPdfPath);
      console.log(`Copied ${pdfFile} to ${destPdfPath}`);
    });
  }
});
