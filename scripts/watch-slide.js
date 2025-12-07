const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const pug = require('pug');
const { ensureDestFolder } = require('./utils');

const slidesDir = path.join(__dirname, '../assets/slides');

function debounce(key, fn, delay = 100) {
  const pending = debounce.timers.get(key);
  if (pending) clearTimeout(pending);
  debounce.timers.set(key, setTimeout(() => {
    debounce.timers.delete(key);
    fn();
  }, delay));
}
debounce.timers = new Map();

function isWithin(targetPath, parentPath) {
  const relative = path.relative(parentPath, targetPath);
  return !relative.startsWith('..') && !path.isAbsolute(relative);
}

function copyFile(sourcePath, sourceRoot, destRoot, destFolder) {
  const relative = path.relative(sourceRoot, sourcePath);
  const destPath = path.join(destFolder, destRoot, relative);
  fse.copySync(sourcePath, destPath);
  console.log(`Copied ${sourcePath} to ${destPath}`);
}

function removeMirrored(sourcePath, sourceRoot, destRoot, destFolder) {
  const relative = path.relative(sourceRoot, sourcePath);
  const destPath = path.join(destFolder, destRoot, relative);
  fse.removeSync(destPath);
  console.log(`Removed ${destPath}`);
}

function copyAllFromDir(sourceDir, destRoot, { ignorePug } = {}) {
  if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) return;

  const ignore = ignorePug ? `${sourceDir}/**/*.pug` : undefined;
  const files = glob.sync(`${sourceDir}/**/*`, { nodir: true, ignore });

  files.forEach(file => copyFile(file, sourceDir, destRoot, destFolder));
}

function compilePugFiles(slideFolder, destFolder) {
  const pugFiles = glob.sync(`${slideFolder}/*.pug`);
  if (pugFiles.length === 0) return;

  pugFiles.forEach(file => {
    try {
      const compiledFunction = pug.compileFile(file);
      const html = compiledFunction();
      const destFile = path.join(destFolder, path.basename(file, '.pug') + '.html');
      fse.ensureDirSync(path.dirname(destFile));
      fs.writeFileSync(destFile, html);
      console.log(`Compiled ${file} to ${destFile}`);
    } catch (error) {
      console.error(`Error compiling ${file}:`, error);
    }
  });
}

function watchFolderRecursively(root, onChange) {
  const watchers = new Map();

  function addWatcher(dir) {
    if (watchers.has(dir)) return;

    const watcher = fs.watch(dir, (eventType, filename) => {
      if (!filename) return;
      const fullPath = path.join(dir, filename);

      if (eventType === 'rename' && fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      }

      onChange(eventType, fullPath);
    });

    watchers.set(dir, watcher);
  }

  function walk(dir) {
    addWatcher(dir);
    fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      }
    });
  }

  walk(root);

  return () => {
    watchers.forEach(w => w.close());
    watchers.clear();
  };
}

const slideName = process.argv[2];
if (!slideName) {
  console.error('Usage: node scripts/watch-slide.js <slide-folder-name>');
  process.exit(1);
}

const slideFolder = path.join(slidesDir, slideName);
if (!fs.existsSync(slideFolder) || !fs.statSync(slideFolder).isDirectory()) {
  console.error(`Slide folder "${slideName}" was not found under ${slidesDir}`);
  process.exit(1);
}

const destFolder = ensureDestFolder(slideFolder);
const srcFolder = path.join(slideFolder, 'src');
const imgFolder = path.join(slideFolder, 'img');

compilePugFiles(slideFolder, destFolder);
copyAllFromDir(imgFolder, 'img');
copyAllFromDir(srcFolder, 'src', { ignorePug: true });

function handleChange(eventType, targetPath) {
  if (!targetPath.startsWith(slideFolder)) return;

  const extension = path.extname(targetPath);

  if (extension === '.pug') {
    debounce('pug', () => compilePugFiles(slideFolder, destFolder));
    return;
  }

  if (isWithin(targetPath, srcFolder)) {
    debounce(`src-${targetPath}`, () => {
      if (!fs.existsSync(targetPath)) {
        removeMirrored(targetPath, srcFolder, 'src', destFolder);
        return;
      }

      const stats = fs.statSync(targetPath);
      if (stats.isDirectory()) return;
      if (path.extname(targetPath) === '.pug') {
        debounce('pug', () => compilePugFiles(slideFolder, destFolder));
        return;
      }

      copyFile(targetPath, srcFolder, 'src', destFolder);
    });
    return;
  }

  if (isWithin(targetPath, imgFolder)) {
    debounce(`img-${targetPath}`, () => {
      if (!fs.existsSync(targetPath)) {
        removeMirrored(targetPath, imgFolder, 'img', destFolder);
        return;
      }

      const stats = fs.statSync(targetPath);
      if (stats.isDirectory()) return;
      copyFile(targetPath, imgFolder, 'img', destFolder);
    });
  }
}

watchFolderRecursively(slideFolder, handleChange);
console.log(`Watching ${slideFolder} for changes. Output: ${destFolder}`);
