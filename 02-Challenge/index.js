const inquirer = require('inquirer@8.2.4');

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
      choices: [ 'Blue', 'Red', 'Green',]
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Next, choose the shape that you would like for your logo.',
      choices: ['Square', 'Circle', 'Triangle']
    }
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Choose what color of shape you would like for your logo.',
        choices: ['Orange', 'Yellow', 'Red',]
      }
  ])
  .then((answers) => {
    console.log(answers);

  });
    // Create SVG file code
    // Generate SVG file based on user input
    // Save SVG file as .svg file