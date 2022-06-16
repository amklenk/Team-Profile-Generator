const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Dave");
    
    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

});

test("gets employee's name and sets it as object's name", () => {
    const employee = new Employee("Dave");

    expect(employee.getName()).toHaveProperty("name");
});

test("get's employee's id and sets it as object's id", () => {
    const employee = new Employee("Dave");

    expect(employee.getId()).toHaveProperty("id");
})

test("get's employee's email and sets it as object's email", () => {
    const employee = new Employee("Dave");
    
    expect(employee.getEmail()).toHaveProperty("email");
})

test("get's employee's role and sets it as object's role", () => {
    const employee = new Employee("Dave");
    
    expect(employee.getRole()).toHaveProperty("role");
})