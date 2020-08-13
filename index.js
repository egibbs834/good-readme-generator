const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

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
        name: "stop",
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } 
        console.log("readme created?")
    });
};

function init() {
    inquirer
        .prompt(questions)
        .then(response => {

            if (response.stop === true) {
                return writeToFile("README.md", generateMarkdown(response));
            };
            init();
        })
        .catch((err) => {
            if (err) {
                throw err;
            };
        });

};

init();





