// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
    * [Installation](#installationInstruction)
    * [Usage Details](#usageDetails)
    * [Contribution](#contributionInformation)
    * [Test Information](#testInformation)

  ## Installation
  
  ${data.installationInstructions}

  ## Usage Details

  ${data.usageDetails}

  ## Contribution

  ${data.contributionInformation}

  ## Test Information

  ${data.testInformation}

`;
}

module.exports = markdownTemplate;
