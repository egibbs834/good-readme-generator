// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # DESCRIPTION
  ${data.description}
  # TABLE OF CONTENTS
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
# INSTALLATION
${data.installation}
# USAGE
${data.usage}
# LICENSE  
${data.license}
# CONTRIBUTING  
${data.contributing}
# TESTS  
${data.tests}
# QUESTIONS 
[Github Profile:](https://github.com/${data.username})
Please reach out to me via email with any questions: ${data.questions}

`;
}

module.exports = generateMarkdown;
