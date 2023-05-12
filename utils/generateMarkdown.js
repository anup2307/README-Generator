// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge ='';
  switch(license){
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'APCHE2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GPLv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD-3':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;  
    default:      
      badge = ''
  }
   return badge;
}

// function that returns the license link
function renderLicenseLink(license) {
  let link ='';
  switch(license){
    case 'MIT':
      link = '[MIT](https://choosealicense.com/licenses/mit/)'
      break;
    case 'APCHE2.0':
      link = '[APCHE2.0](https://www.apache.org/licenses/LICENSE-2.0)'
      break;
    case 'GPLv3':
      link = '[GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)'
      break;
    case 'BSD-3':
      link = '[BSD-3](https://opensource.org/license/bsd-3-clause/)'
      break;  
    default:      
      link = ''
  }
   return link;
}

// function that returns the license section of README
function renderLicenseSection(license) {
 if (license){
  return `The application is covered under ${renderLicenseLink(license)}`
 }else{
  return `No License has been chosen`
 }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
    ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Questions](#Questions)
  - [License](#License)
  - [Tests](#Tests)

  ## Description
  ${data.projectdescription}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.dependecies}

  ## Contributing
  ${data.repodata}

  ## Questions
  GitHub Link: https://github.com/${data.name}
  For more questions please contact - ${data.emailaddress}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
