// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const filename = './utils/README.md'
const questions= () =>{
    return inquirer.prompt ([  
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',  
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
                type: 'input',
                name: 'dependecies',
                message: 'What command should be run to install dependencies?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to test your project?',
            },
            {
                type: 'input',
                name: 'repodata',
                message: 'What does the user need to know about contributing to the repo: ',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select the type pf License you would like to add to your project:',
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
                name: 'usage',
                message: 'Add the Usage information for your Project: ',
            },
            {
                type: 'input',
                name: 'githubname',
                message: 'What is your GitHub username?', 
            },
            {
                type: 'input',
                name: 'emailaddress',
                message: 'What is your emailaddress?',
            },
        ]);
};


// function to write README file
function writeToFile(filename, data) { 
    fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!'));
}

// function to initialize app
function init() {
    questions()
     .then((response)=> writeToFile(filename, generateMarkdown(response)))
     .catch((err) => console.error(err));
}

init();
