const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG, saveSVG } = require('./logo.js');

const logo = {
  colorChoices: ['red', 'blue', 'green'],
  shapeChoices: ['circle', 'square', 'triangle'],
};

async function runProgram() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Choose the text you would like for your logo.',
    },
    {
      type: 'list',
      name: 'logoColor',
      message: 'Choose the color that you would like for your logo.',
      choices: logo.colorChoices,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Next, choose the shape that you would like for your logo.',
      choices: logo.shapeChoices,
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose what color of shape you would like for your logo.',
      choices: logo.colorChoices,
    },
  ]);

  const svg = generateSVG(answers);
  saveSVG(svg);
  console.log(answers);
}

runProgram();

module.exports = {
  generateSVG,
  saveSVG
};
