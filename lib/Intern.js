const Employee = require("./Employee");

//class creates manager object (and overlapping functionality with Employee) by extending Employeeand each function in the class gets and returns information
class Intern extends Employee {
    constructor (name = " ", id = "", email = " ", school = " "){
     super(name, id, email);

     this.school = school;
    }

    getSchool(){
        return {school: this.school};
    }

    getRole(){
        return {role: "Intern"};
    };
}


module.exports = Intern;