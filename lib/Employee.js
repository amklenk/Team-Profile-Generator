//this is where the class will be to generate an object
class Employee {
    constructor(name = '', id = '', email = ''){
      this.name = name;
      this.id = id;
      this.email = email;
    }
};

module.exports = Employee;