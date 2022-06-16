//this is where the class will be to generate an object
//require
const inquirer = require("inquirer");

class Employee {
    constructor(name = " ", id = "", email = " "){
      this.name = name;
      this.id = id;
      this.email = email;
    }

getName() {
    return {name: this.name};
//  inquirer.prompt({
//     type: "input",
//     name: "name",
//     message: "Please enter the employee's name.",
//     validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("Please enter the employee's name!");
//           return false;
//         }
//  }
// })
// .then(({ name }) => {
//     this.employee = new Employee(name);
// });
}

getId() {
    return {id: this.id};
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
}

getEmail() {
    return {email: this.email};
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
}

getRole(){
    return {role: "Employee"};
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
        //I DON'T KNOW?
    );
}

};

module.exports = Employee;