const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
let questions = [{
        type: "input",
        message: "Title of your project: ",
        name: "title",
    },
    {
        type: "input",
        message: "Description of project: ",
        name: "description",
    },
    {
        type: "input",
        message: "Github username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Installation of project: ",
        name: "installation",
    },
    {
        type: "input",
        message: "How to use: ",
        name: "usage",
    },
    {
        type: "list",
        message: "License used: ",
        choices: ["Apache", "GNU General Public v3.0", "MIT", "The one badge specific to this repository"],
        name: "license",
    },
    {
        type: "input",
        message: "Ways others can contribute: ",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests used: ",
        name: "tests",
    },
    {
        type: "input",
        message: "Email address: ",
        name: "questions",
    },
    {
        type: "confirm",
        message: "Generate README?",
        name: "quit",
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } 
        console.log("readme created?")
    });
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            if (answers.quit === true) {
                return writeToFile("README.md", generateMarkdown(answers));
            };
            init(); //recursively loop through questions
        })
        .catch((err) => {
            if (err) {
                throw err;
            };
        });

};

init();





