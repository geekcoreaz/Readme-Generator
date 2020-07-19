const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your README?"
    },
    {
        type: "input",
        name: "description",
        message: "Give me a description of your project."
    },
    {
        type: "input",
        name: "install",
        message: "How do you install this?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    },
    {
        type: "list",
        name: "license",
        message: 'What license would you like to use for this application?',
        choices: ['MIT', 'GNU GPLv3', 'None']
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Did you have any contributors you would like to mention?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users test your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);

        const response = ``

        fs.writeFile('README.md', response, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully wrote to README.MD");
            }

        })
    })
}

init();