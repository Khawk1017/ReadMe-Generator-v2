function renderLicenseBadge(license) {
    if (!license){
      return '';
    }
  
    // the URLs for each license badge image
    const badges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      'BSD 3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      'None': ''
    };
  
    // if the license is one of the supported licenses, return the corresponding badge
    if (Object.keys(badges).includes(license)){
      return `![${license} License](${badges[license]})`;
    }
  
    // if the license is not one of the supported licenses, return a message
    return 'License not recognized';
  }
  
  function renderLicenseLink(license) {
    if (!license){
      return "";
    }
  
    switch (license){
      case "Apache-2.0":
        return "https://opensource.org/licenses/Apache-2.0";
      case "BSD-3-Clause":
        return "https://opensource.org/licenses/BSD-3-Clause";
      case "GPL-3.0": 
        return "https://opensource.org/licenses/GPL-3.0";
      case "MIT": 
        return "https://opensource.org/licenses/MIT";
      case "Unlicense":
        return "http://unlicense.org";
      default: 
        return "";
    }
  }
  
  function renderLicenseSection(license) {
    if (!license){
      return '';
    }
  
    return `
    ## License 
    
    This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
    ${renderLicenseBadge(license)}
    `;
  }
  
  function generateMarkdown(data) {
    return `
    
    # ${data.Title}
    https://github.com/${data.Username}/${data.Title}
    # Description
    ${data.Description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application: ${data.Installation}
    # Usage
    In order to use this app, ${data.Usage}
    # License
    ${renderLicenseSection(data.License)}
    # Contributing
    ${data.Contributing}
    # Tests
    The following is needed to run the test: ${data.Tests}
    # Questions 
    If you have any questions about the repo, open an issue or contact ${data.Username} directly at ${data.Email}.
  `;
  }
  
  module.exports = generateMarkdown;
  