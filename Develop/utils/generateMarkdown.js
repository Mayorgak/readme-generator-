

// function to generate markdown for README
// function  

module.exports = (templateData) => {
  // destructure page data by section
  const { title, description, installation , usage, license , userPic} = templateData;
  return `
  
  # ${title} \n

  <img src="${userPic}"></img>

## Description
  ${description}\n

## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contribution](#Contribution)
  5. [Questions](#Questions)

## Installation \n
  \`\`\`bash
  ${installation}
  \`\`\`

## Usage \n
 \`\`\`bash
  ${usage}\n
 \`\`\`

## License \n
  ${license} \n
  ![License badge](https://img.shields.io/badge/license-${license}-brightgreen)

## Contribution 
  * Kristen Mayorga
 

## Questions

 Gihub username : <a href= "#">https://github.com/Mayorgak</a>

 Email Address : <a href= "#">kristenmayorga@gmail.com</a>
`;
}

// module.exports = templateData;
