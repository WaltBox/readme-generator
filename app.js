// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const markdownTemplate = require('./utils/markdownTemplate');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message:'Please enter the name of your project'
    },

    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a detailed description of your project'
    },
];

// TODO: Create a function to write README file
function generateMarkdown(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), markdownTemplate (data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(userResponses => {
            generateMarkdown('README.md', userResponses);
            console.log('...DONE BITCH');
        })
        .catch(err => console.error(err));
}

// Function call to initialize app
init();
