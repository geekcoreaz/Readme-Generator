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
        choices: ['MIT', 'GNU GPLv3', 'ISC']
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

function promptUser() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);

        if (answers.license == 'MIT') {
            answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } if (answers.license == 'GNU GPLv3') {
            answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } if (answers.license == 'ISC') {
            answers.license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        }

        const response = `
# ${answers.title}

${answers.license}

## Description
${answers.description}

---
## Table of Contents
[Installation/Usage](#Installation/Usage-Instructions)  
[Usage](#Usage-Information)  
[Contributors](#Contributors)  
[Testing](#Testing)  
[Contact](#Contact)  

---
## Installation/Usage Instructions
${answers.install}  
${answers.usage}  

## Contributors
${answers.contributor}

## Testing
${answers.test}

---
## Contact

Github: [${answers.github}](https://github.com/${answers.github})

Email: <${answers.email}>
        `

        fs.writeFile('README.md', response, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully wrote to README.MD");
            }

        })
    })
}

promptUser();