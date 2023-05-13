const inquirer = require('inquirer@8.2.4');
const fs = require('fs');

const colorChoices = ["Blue", "Red", "White", "Orange", "Green", "Black"];
const shapeChoices = ["Square", "Circle", "Triangle"];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Choose the text you would like for your logo.'

    },
    {
      type: 'list',
      name: 'logoColor',
      message: 'Choose the color that you would like for your logo.',
      choices: colorChoices
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Next, choose the shape that you would like for your logo.',
      choices: shapeChoices
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Choose what color of shape you would like for your logo.',
        choices: colorChoices
    }
  ])
  .then((answers) => {
    const svg = generateSVG(answers);
    saveSVG(svg);
    console.log(answers);
  });
  
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

function getShape(logoShape, shapeColor) {
    switch (logoShape) {
        case 'Square':
            return `<rect fill="${shapeColor}" width="80" height="80" x="10" y="10"/>`;
        case 'Circle':
            return `<circle fill="${shapeColor}" cx="50" cy="50" r="40"/>`;
        case 'Triangle':
            return `<polygon fill="${shapeColor}" points="50,10 90,90 10,90"/>`;
        default:
            return '';
    }
  }

function saveSVG(svgFile) {
    fs.writeFile('myLogo.svg', svgFile, (err) => {
        if (err) throw err;
    });
}