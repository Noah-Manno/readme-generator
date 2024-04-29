// Including the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your repo?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'desciption',
    },
    {
        type: 'input',
        message: 'Are there any installation instructions viewers of your repo should know about?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Give instructions on how this project/repo is used.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project/repo?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Are there any tests for this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data has been written to README.md');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
    })
    .catch((error) => {
        console.error('Error occurred:', error);
      });
}

// Function call to initialize app
init();
