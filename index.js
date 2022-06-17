// am I going to run inquirer here? Or Should this be mostly empty calling on another page's functionality?
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/page-template");

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
 }
},
{
  type: "input",
  name: "id",
  message: "What is the team manager's id?",
  validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's id number!");
        return false;
      }
}
},
{
  type: "input",
  name: "email",
  message: "What is the team manager's email?",
  validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email address!");
        return false;
      }
}
},
{
  type: "input",
  name: "office",
  message: "What is the team manager's office number?",
  validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's office number!");
        return false;
      }
}
}];

function buildTeam() {
this.team = [];
this.manager;
}

buildTeam.prototype.promptManager = function (){
  inquirer.prompt (managerQuestions)
  .then(({name, id, email, office}) => {
    this.manager = new Manager(name, id, email, office);
    this.team.push(this.manager);
    console.log(this.team);
    this.promptTeamMember();
  })
};

buildTeam.prototype.promptTeamMember = function () {
  console.log("Team question!");
// inquirer.prompt(
//   {
//     type: "list",
//     name: "member",
//     message: "Which type of team member would you like to add?",
//     choices: ["Engineer", "Intern", "I don't want to add any more team members"]
//   }
// ).then(({ member }) => {
//   if (member === "Engineer"){
//     this.promptEngineer();
//   } else if (member === "Intern"){
//     this.promptEngineer();
//   }  else {
//     return;
//     // return this.generateHTML;
//   }
// });
  }

// buildTeam.prototype.promptEngineer = function(){
  // inquirer.prompt (
  //   {
  //     type: "input",
  //     name: "name",
  //     message: "What is the engineer's name?",
  //     validate: nameInput => {
  //         if (nameInput) {
  //           return true;
  //         } else {
  //           console.log("Please enter the engineer's name!");
  //           return false;
  //         }
  //  }
  // },
  // {
  //   type: "input",
  //   name: "id",
  //   message: "What is the engineer's id?",
  //   validate: idInput => {
  //       if (idInput) {
  //         return true;
  //       } else {
  //         console.log("Please enter the team manager's id number!");
  //         return false;
  //       }
  // }
  // },
  // {
  //   type: "input",
  //   name: "email",
  //   message: "What is the engineer's email?",
  //   validate: emailInput => {
  //       if (emailInput) {
  //         return true;
  //       } else {
  //         console.log("Please enter the engineer's email address!");
  //         return false;
  //       }
  // }
  // },
  // {
  //   type: "input",
  //   name: "github",
  //   message: "What is the engineer's GitHub username?",
  //   validate: githubInput => {
  //       if (githubInput) {
  //         return true;
  //       } else {
  //         console.log("Please enter the engineer's GitHub username!");
  //         return false;
  //       }
  // }
  // }
  // )
  // .then(
  //   ({name, id, email, github}) => {
  //     this.team.push(new Engineer(name, id, email, github));
  //     this.promptTeamMember();
  //   }
  // )
// };

// buildTeam.prototype.promptIntern = function() {
//   inquirer.prompt (
//     {
//       type: "input",
//       name: "name",
//       message: "What is the intern's name?",
//       validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter the intern's name!");
//             return false;
//           }
//    }
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "What is the intern's id?",
//     validate: idInput => {
//         if (idInput) {
//           return true;
//         } else {
//           console.log("Please enter the intern's id number!");
//           return false;
//         }
//   }
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What is the intern's email?",
//     validate: emailInput => {
//         if (emailInput) {
//           return true;
//         } else {
//           console.log("Please enter the intern's email address!");
//           return false;
//         }
//   }
//   },
//   {
//     type: "input",
//     name: "school",
//     message: "What is the intern's school?",
//     validate: schoolInput => {
//         if (schoolInput) {
//           return true;
//         } else {
//           console.log("Please enter the intern's school!");
//           return false;
//         }
//   }
//   }
//   )
//   .then(
//     ({name, id, email, school}) => {
//       this.team.push(new Intern(name, id, email, school));
//       this.promptTeamMember();
//     });
// }

new buildTeam().promptManager();



// function managerPrompt () {
// 
// .then(({ name }) => {
//     this.manager = new Manager(name);
// });
// }

// .then(({ id }) => {
//     this.id = new Employee(id);
// });

// .then(({ email }) => {
//     this.email = new Employee(email);
// });

// //Manger is a must, then 
// //Role
// inquirer.prompt({
//     type: "list",
//     name: "role",
//     message: "Which role does the employee hold?",
//     choices: ["Manager", "Engineer", "Intern"],
//     validate: emailInput => {
//         if (emailInput) {
//           return true;
//         } else {
//           console.log("Please choose a role for your employee!");
//           return false;
//         }
//  }
// })
// .then(
    //Depending on choice, will go for the functionality in each role's page
// );

//initial prompt manager --> pushed into Team array
//separate intern and engineer --> pushed into Team array


// fs.writeToFile(){

// }

// fs.copyToFile(){

// }


