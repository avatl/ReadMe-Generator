const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("/Users/ava/development/homework/readme-generator/utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        message: "Enter your github username",
        name: "username",
        type: "input"
    }, {
        message: "Enter your project name",
        name: "title",
        type: "input"
    }, {
        message: "Give a brief description of your project",
        name: "description",
        type: "input"
    }, {
        message: "Did anyone else contribute to this project?",
        name: "contributors",
        type: "input"
    }, {
        message: "What are the installation instructions for your project?",
        name: "instructions",
        type: "input"
    }, {
        message: "What licenses are being used?",
        name: "license",
        choices: ["MIT", "Apache-2.0", "ISC", "LGPL", "GPL"],
        type: "checkbox"
    }, {
        message: "Describe the usage for this project",
        name: "usage",
        type: "input"
    }, {
        message: "Have you put your project through any tests? If so, which tests and did they pass?",
        name: "tests",
        type: "input"
    }
];

// function to write README file
function writeToFile(data) {
    try {
        fs.writeFileSync("README.md", data)
    }
    catch (err) { }
}

// function to initialize program
 async function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const createFile = generateMarkdown(response);
            writeToFile(createFile);
        })
}

// function call to initialize program
init();
