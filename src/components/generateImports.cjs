const fs = require('fs');
const path = require('path');

// Path to the folder containing your images (relative to the script's location)
const imageFolder = path.join(__dirname, '../../public/assets/reception');

// Output file where the imports will be written
const outputFile = path.join(__dirname, '../../src/imageImports.js');

// Read all files in the folder
const files = fs.readdirSync(imageFolder);

// Filter only image files (you can add more extensions if needed)
const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

// Generate import statements
const imports = imageFiles.map(file => {
  const imageName = path.basename(file, path.extname(file)); // Remove file extension
  return `import ${imageName} from '${path.join(imageFolder, file).replace(/\\/g, '/')}';`;
});

// Generate the export statement
const exportStatement = `export const images = [${imageFiles.map(file => path.basename(file, path.extname(file))).join(', ')}];`;

// Combine imports and exports
const content = `${imports.join('\n')}\n\n${exportStatement}`;

// Write the content to the output file
fs.writeFileSync(outputFile, content);

console.log(`Generated ${outputFile} with ${imageFiles.length} image imports.`);