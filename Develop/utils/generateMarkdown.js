

// function to generate markdown for README
// function  

module.exports = (templateData) => {
  // destructure page data by section
  const { title, description, installation , usage, license , userPic} = templateData;
  return `
  
  # ${title} \n

  <img src="${userPic}"></img>

  # Description
  ${description}\n


  # Installation \n
  \`\`\`bash
  ${installation}
  \`\`\`

  # Usage \n
  ${usage}\n

  # License \n
  ${license} \n
  ![License badge](https://img.shields.io/badge/license-${license}-brightgreen)

  # Questions \n

  

  Email Address : <a href=${email}>${email}</a>


`;
};

// module.exports = templateData;
