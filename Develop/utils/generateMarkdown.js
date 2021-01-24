// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.Username}/${data.Title}
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
This project is licensed under ${data.License} license.
# Contributors
Contributors: ${data.Contributors}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact ${data.Username}
`;
}

module.exports = generateMarkdown;
