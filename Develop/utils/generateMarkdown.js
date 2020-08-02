

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
1. Installation 
2. Usage 
3. License 

## Installation \n
  \`\`\`bash
  ${installation}
  \`\`\`

## Usage \n
  ${usage}\n

## License \n
  ${license} \n
  ![License badge](https://img.shields.io/badge/license-${license}-brightgreen)

 

 
`;
}

// module.exports = templateData;
