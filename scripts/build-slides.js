const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const { execSync } = require('child_process');

const slidesDir = path.join(__dirname, '../assets/slides');
const outputDir = path.join(__dirname, '../static/slides');

// Get all directories directly under /assets/slides, excluding 'layouts'
const slideFolders = glob.sync(`${slidesDir}/*`, {
  ignore: `${slidesDir}/layouts`,
  absolute: true
}).filter(f => fs.statSync(f).isDirectory());

slideFolders.forEach(folder => {
  const folderName = path.basename(folder);
  const destFolder = path.join(outputDir, folderName);

  // Ensure destination folder exists
  fs.ensureDirSync(destFolder);

  // Process Pug files in this folder (not in subfolders)
  const pugFiles = glob.sync(`${folder}/*.pug`);

  if (pugFiles.length > 0) {
    // Compile Pug files to HTML
    try {
      execSync(`pug ${folder}/*.pug --out ${destFolder}`, { stdio: 'inherit' });
      console.log(`Compiled Pug files in ${folder} to ${destFolder}`);
    } catch (error) {
      console.error(`Error compiling Pug files in ${folder}:`, error);
    }
  }

  // Copy PDF files in this folder
  const pdfFiles = glob.sync(`${folder}/*.pdf`);

  pdfFiles.forEach(pdfFile => {
    const pdfFileName = path.basename(pdfFile);
    const destPdfPath = path.join(destFolder, pdfFileName);
    fs.copySync(pdfFile, destPdfPath);
    console.log(`Copied ${pdfFile} to ${destPdfPath}`);
  });

  // Copy 'img' and 'src' subfolders
  ['img', 'src'].forEach(subfolder => {
    const srcSubfolderPath = path.join(folder, subfolder);
    if (fs.existsSync(srcSubfolderPath) && fs.statSync(srcSubfolderPath).isDirectory()) {
      // Copy only non-Pug files from the 'src' subfolder
      const filesToCopy = glob.sync(`${srcSubfolderPath}/**/*`, {
        ignore: `${srcSubfolderPath}/**/*.pug`
      });

      filesToCopy.forEach(file => {
        const relativePath = path.relative(srcSubfolderPath, file);
        const destFilePath = path.join(destFolder, subfolder, relativePath);
        fs.copySync(file, destFilePath);
        console.log(`Copied ${file} to ${destFilePath}`);
      });
    }
  });
});
