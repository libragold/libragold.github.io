const fs = require('fs');
const path = require('path');
const toml = require('toml');

// Path to your HTML file and Hugo config
const htmlFilePath = path.join(__dirname, '../static/findliner/index.html');
const configPath = path.join(__dirname, '../hugo.toml');

// Path to the Umami partial
const umamiPartialPath = path.join(__dirname, '../layouts/partials/umami.html');

// Function to extract umamiWebsiteID from Hugo config
function getUmamiWebsiteID() {
  const configData = fs.readFileSync(configPath, 'utf8');
  const parsedConfig = toml.parse(configData);
  return parsedConfig.params.umamiWebsiteID;
}

// Function to read the Umami partial and replace the placeholder with umamiWebsiteID
function getCustomScriptTag(umamiWebsiteID) {
  const umamiPartialContent = fs.readFileSync(umamiPartialPath, 'utf8');
  // Replace the Hugo template placeholder with the actual umamiWebsiteID
  return umamiPartialContent.replace('{{ .Site.Params.umamiWebsiteID }}', umamiWebsiteID);
}

// Function to modify the HTML file and insert the Umami script
function addUmami() {
  // Read umamiWebsiteID from Hugo config
  const umamiWebsiteID = getUmamiWebsiteID();

  // Get the custom script tag by replacing the placeholder
  const customScriptTag = getCustomScriptTag(umamiWebsiteID);

  // Read the existing HTML file
  fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return;
    }

    // Find the closing </head> tag and insert the custom script before it
    const closingHeadTag = '</head>';
    const modifiedHTML = data.replace(closingHeadTag, `${customScriptTag}\n${closingHeadTag}`);

    // Write the modified HTML back to the file
    fs.writeFile(htmlFilePath, modifiedHTML, 'utf8', (err) => {
      if (err) {
        console.error('Error writing HTML file:', err);
      } else {
        console.log('Custom script tag added successfully!');
      }
    });
  });
}

// Run the function
addUmami();
