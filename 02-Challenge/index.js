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
    saveSVG(svgFile);
    console.log(answers);
  });

  function generateSVG(answers) {
    const {logoText, logoColor, logoShape, shapeColor} = answers;
    const shape = getShape(logoShape, shapeColor);
    const svgFile = `<svg><rect fill="${shapeColor}" width="100" height="100"/><text fill="${logoColor}" x="20" y="60">${logoText}</text></svg>`;
    return svgFile;
  }

  function saveSVG(svgFile) {
    fs.writeFile('myLogo.svg', svgFile, (err) => {
        if (err) throw err;
        console.log("File has been saved as myLogo.svg");
    });
  }