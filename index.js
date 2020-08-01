const fs = require("fs");

const inquirer = require ("inquirer");
const axios = require("axios");


const generateREADME = require('./Develop/utils/generateMarkdown');


// // array of questions for user
// const questions = [


const promptUser = ()=> {
   return inquirer.prompt([
     {
       type: "input",
       name: "title",
       message: "👤 What is the title of your README?",
       default: "test",
     },
     {
       type: "input",
       name: "id",
       message: "What is your GitHub ID?",
       default: "Mayorgak",
     },
     {
        type: "input",
        message: "👤 What is your email address?",
        name: "email"
    },
     {
       type: "input",
       name: "description",
       message:
         "What would you like to put into the discription of your README?",
       default: "test",
     },
     {
       type: "input",
       name: "installation",
       message: "What are the steps required for installation? ",
       default: "test",
     },

     {
       type: "input",
       name: "usage",
       message: "How does the user run this program? ",
       default: "test",
     },
     {
       type: "list",
       name: "license",
       message: "What license is it under? ",
       choices: [
           "MIT",
            "ISC",
            "GPL"  
       ]
     },
   ]);
 };
promptUser()
.then((answers) => {
   
    axios.get(`https://api.github.com/users/${answers.id}`)
      .then((res) => {
        console.log(res.data);
        // const githubData = res.data;
        answers.userPic = res.data.avatar_url;
        console.log(answers);
        const readmeText = generateREADME(answers);
        writeToFile(readmeText);
      });
});



// function to write README file
function writeToFile(data) {

    fs.writeFile("README.md", data, (err) => {
      if (err) throw err;

      console.log("README complete! Check out README.md to see the output!");
    });
}


// // function to initialize program
// function init() {



// }

// // function call to initialize program
// init();


