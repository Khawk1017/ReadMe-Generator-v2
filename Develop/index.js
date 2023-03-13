const inquirer = require('inquirer')
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "what is the title of the project",
    name: "Title",
    
},
{
    type: "input",
    message: "what is the project about? Give a description.",
    name:"Description"
},
{
    type: "input",
    message:"Table of contents",
    name:"Table of Contents",

},
{
    type: "input",
    message: "what does the user need to install to run this app(ie..dependencies)?",
    name: "Installation",
},
{
    type: "input",
    message: "how is the app used? Give Instructions",
    name: "Usage",
},
{
    type: "input",
    message: "what license is being used? (ie...MIT)",
    name:"License",
},
{
    type: "input",
    message: "who contributed to this project?",
    name: "Contributing",
},
{
    type: "input",
    message: "what commands are needed to test this app?",
    name: "Tests",
},
{
    type: "input",
    message:"What is your Github username?",
    name: "Username",
},
{
    type: "input",
    message: "what is your email?",
    name: "Email",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log(fileName)
        console.log(data)
        if (err){
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data))
    })
}

// Function call to initialize app
init();
