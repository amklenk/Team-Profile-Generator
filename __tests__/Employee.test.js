const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Dave");
    
    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));

})