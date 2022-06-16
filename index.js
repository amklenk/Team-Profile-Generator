// am I going to run inquirer here? Or Should this be mostly empty calling on another page's functionality?
const inquirer = require("inquirer");
const fs = require("fs");

//name
 inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter the employee's name.",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name!");
          return false;
        }
 }
})
.then(({ name }) => {
    this.employee = new Employee(name);
});

//id
inquirer.prompt({
    type: "input",
    name: "id",
    message: "Please enter the employee's id number.",
    validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee's id number!");
          return false;
        }
 }
})
.then(({ id }) => {
    this.id = new Employee(id);
});

//email
inquirer.prompt({
    type: "input",
    name: "email",
    message: "Please enter the employee's email address.",
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the employee's email address!");
          return false;
        }
 }
})
.then(({ email }) => {
    this.email = new Employee(email);
});
//Manger is a must, then 
//Role
inquirer.prompt({
    type: "list",
    name: "role",
    message: "Which role does the employee hold?",
    choices: ["Manager", "Engineer", "Intern"],
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please choose a role for your employee!");
          return false;
        }
 }
})
.then(
    //Depending on choice, will go for the functionality in each role's page
);

//initial prompt manager --> pushed into Team array
//separate intern and engineer --> pushed into Team array


// fs.writeToFile(){

// }

// fs.copyToFile(){

// }


