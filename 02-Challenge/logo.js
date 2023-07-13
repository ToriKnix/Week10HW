const fs = require('fs');


const colorChoices = ['red', 'green', 'blue'];
const shapeChoices = ['circle', 'square', 'triangle'];

function generateSVG(answers) {
  const { logoText, logoColor, logoShape, shapeColor } = answers;
  const shape = getShape(logoShape, shapeColor);

  const svgFile = `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${shape}
      <text fill="${logoColor}" x="150" y="140" text-anchor="middle" font-size="30">${logoText}</text>
    </svg>
  `;

  return svgFile;
}

function saveSVG(svgFile) {
  fs.writeFile('myLogo.svg', svgFile, (err) => {
    if (err) throw err;
    console.log('Logo saved as myLogo.svg');
  });
}

function getShape(logoShape, shapeColor) {
  let shape;

  switch (logoShape) {
    case 'circle':
      shape = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
      break;
    case 'square':
      shape = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      shape = `<polygon points="150 50 200 150 100 150" fill="${shapeColor}" />`;
      break;
    default:
      shape = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
      break;
  }

  return shape;
}

module.exports = {
  colorChoices,
  shapeChoices,
  generateSVG,
  saveSVG
};