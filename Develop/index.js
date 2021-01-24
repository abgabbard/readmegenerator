const inquirer = require("inquirer");
const fs = require('fs');
// const util = require('util');
// const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
inquirer
    .prompt([
{   
    type: "input", 
    message: "What is the title of your project?",
    name: "Title"
},

{   
    type: "input", 
    message: "Please provide a description of your project!",
    name: "Description"
},

{   
    type: "input", 
    message: "Table of Contents",
    name: "Table of Contents"
},

{   
    type: "input", 
    message: "Please provide details on how to install your application.",
    name: "Install"
},

{   
    type: "input", 
    message: "Please provide details on how to use your application!",
    name: "Usage"
},

{   
    type: "checkbox", 
    name: "license",
    message: "What license is being used on this project?",
    choices: ["MIT", "APACHE", "IBM"]
},

{   
    type: "input", 
    message: "Please list any contributors on this project.",
    name: "Contributions"
},

{   
    type: "input", 
    message: "Please provide comands to test the app",
    name: "Test"
},

{   
    type: "input", 
    message: "Please provide a way to contact you (i.e.: email or github)",
    name: "Contact"
},

{   
    type: "input", 
    message: "Please provide your github username.",
    name: "github"
},

]).then((data) =>{
    const userOptions = [
    {
        name: "The MIT License",
        badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]',
        desc: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",

    },
    {
        name: "Apache 2.0",
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
        desc: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",

    },
    {
        name: "IBM",
        badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]',
        desc: "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",

    },
];
if (data.license.toString() === "MIT") {
    var nameEl = userOptions[0].name;
    var badgeEl = userOptions[0].badge;
    var descEl = userOptions[0].desc;
} else if (data.license.toString() === "APACHE") {
    var nameEl = userOptions[1].name;
    var badgeEl = userOptions[1].badge;
    var descEl = userOptions[1].desc;
 } else {
    var nameEl = userOptions[2].name;
    var badgeEl = userOptions[2].badge;
    var descEl = userOptions[2].desc;
    }

    const readmefile = `
${badgeEl}
# ${data.Title}
https://github.com/${data.github}/${data.Title}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
# Installation
The following dependencies must be installed to run the application.
# Usage
In order to use this app, ${data.Usage}
# License
This project is licensed under ${nameEl} license.
# Contributors
Contributors: ${data.Contributions}
# Tests
The following is needed to run the test: ${data.Test}
# Description of app
${descEl}
# Questions
If you have any questions about the repo, open an issue or contact ${data.github}
`;
    fs.writeFile('README.md', readmefile, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

})


// function to initialize program
// //  init() {
// //     inquirer.prompt(questions).then(function(data) {
// //         writeToFile("README.md", generatorMarkdown(data));
// //         console.log(data)
// //     })

// }

// function call to initialize program
// init();
]
