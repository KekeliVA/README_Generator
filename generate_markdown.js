/* */

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)

  ${renderLicenseLink(data.license, data.username)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation 

  To install necessary dependencies, type the following command:
  
  ${data.installation}

  ## Usage

  ${data.usage}

  

  ## Contributing 

  ${data.contributing}

  ## Test 

  To run test, type the following command:

  ${data.test}

  ## Questions

  If you have any questions about the repository, contact me at:
  ${data.email}

  You can find more of my work at:
  https://www.github.com/${data.username}/


  `

}

// write the three functions 
// for license badge ../images../ comes in form of SVG file, look up license and badging
function renderLicenseBadge(license) {
  return `apm/1/${license}` 
}

function renderLicenseLink(license, username) {
  return `https://img.shields.io/badge/${license}-${username}-blue`
}

module.exports = generateMarkdown;

/*
function renderLicenseSection() {
  $('p').append()
}
${renderLicenseSection(data.license)} 
*/