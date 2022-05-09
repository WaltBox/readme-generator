// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }else {
    return '';
  }

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function markdownTemplate(data) {
  return `# ${data.projectTitle}

  ## Description

  ${data.projectDescription}

  ## Table of Contents
    - [Description](#projectDescription)
    - [Installation](#installationInstructions)
    - [Usage Details](#usage Details)
    - [Contribution](#contributionInformation)
    - [Test Information](#testInformation)

  ## Installation
  
  ${data.installationInstructions}

  ## Usage Details

  ${data.usageDetails}

  ## Contribution

  ${data.contributionInformation}

  ## Test Information

  ${data.testInformation}

  ## License

  ${data.licenseName}

  ## Questions?

  ### Github: <a href= "https://github.com/${data.gitUsername}">${data.gitUsername}</a>
  ### Email: <a href= "mailto:${data.emailAddress}">${data.emailAddress}</a>
`;
}

module.exports = markdownTemplate;
