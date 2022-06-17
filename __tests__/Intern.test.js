const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Dave");
    
    expect(intern.name).toBe("Dave");
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name and sets it as object's name", () => {
    const intern = new Intern("Dave");

    expect(intern.getName()).toHaveProperty("name");
});

test("get's intern's id and sets it as object's id", () => {
    const intern = new Intern("Dave");

    expect(intern.getId()).toHaveProperty("id");
})

test("get's intern's email and sets it as object's email", () => {
    const intern = new Intern("Dave");
    
    expect(intern.getEmail()).toHaveProperty("email");
})

test("get's intern's school and sets it as object's school", () => {
    const intern = new Intern("Dave");
    
    expect(intern.getSchool()).toHaveProperty("school");
})

test("get's intern's role and sets it as object's role", () => {
    const intern = new Intern("Dave");
    
    expect(intern.getRole()).toHaveProperty("role");
})