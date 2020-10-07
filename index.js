const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(".utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        message: "Enter your github username",
        name: "gitUsername",
        type: "input"
    }, {
        message: "Enter your project name",
        name: "projectTitle",
        type: "input"
    }, {
        message: "Give a brief description of your project",
        name: "gitRepository",
        type: "input"
    }, {
        message: "Did anyone else contribute to this project?",
        name: "projectContributors",
        type: "input"
    }, {
        message: "What are the installation instructions for your project?",
        name: "projectInstructions",
        type: "input"
    }, {
        message: "What licenses are being used?",
        name: "projectLicense",
        choices: ["MIT", "Apache-2.0", "ISC", "LGPL", "GPL"],
        type: "checkbox"
    }, {
        message: "Describe the usage for this project",
        name: "projectUsage",
        type: "input"
    }, {
        message: "Have you put your project through any tests? If so, which tests and did they pass?",
        name: "projectTests",
        type: "input"
    }
];

// function to write README file
function writeToFile(data) {
    try {
        fs.writeFileSync("README.md", data)
    }
    catch (err) {}
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const createFile = generateMarkdown(response);
        writeToFile(createFile);
    })
}

// function call to initialize program
init();
