// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub username?',  
    },
    {
        type: 'input',
        name: 'emailaddress',
        message: 'What is your emailaddress?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project name?',       
    },
    {
        type: 'input',
        name: 'projectdescription',
        message: 'Please write a short description of the project-',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have',
        choices:[
            "MIT",
            "APCHE2.0",
            "GPLv3",
            "BSD-3",
            "NONE"
        ]
    },
    {
        type: 'input',
        name: 'dependecies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to tests?',
    },
    {
        type: 'input',
        name: 'repodata',
        message: 'What does the user need to know about contributing to the repo',
    },

])
.then((response) => {
    const readme = generateMarkdown(response);
    fs.writeFile('README.md', readme, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
  );
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
