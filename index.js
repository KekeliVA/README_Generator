var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkdown = require("./generate_markdown");

// function to ask questions and gather responses
var questions = [
  {
    type: "input",
    message: "What is your username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your github email",
    name: "email"
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title"
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description"
  },
  {
    type: "input",
    message: "Enter your license type",
    name: "license"
  },
  {
    type: "input",
    message: "What command is required for the installation of dependencies?",
    name: "installation"
  },
  {
    type: "input",
    messaga: "What additional information does the user need to know about the repository?",
    name: "usage"
  },
  {
    type: "input",
    message: "What does the user need to know about making contributions to the repository?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What command is required to run the test?",
    name: "testing"
  },
]
function gatherQuestions() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log("generating README");
    writeREADME("README.md", generateMarkdown({response}));
  })
}

function writeREADME(fileName, response) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), response);
}

gatherQuestions();
// function to write reponses to files
