const Employee = require("./Employee");

// In addition to `Employee`'s properties and methods, `Intern` will also have:
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school)
    //   * school 
    this.school = school;
    this.role = "intern"
    this.questions = [...this.primaryQuestions, 
      {
        type: "input",
        message: "What school does this intern attend?",
        name: "school"
    },
    {
      type: "list",
      message: "What type of employee would you like to add to your team?",
      choices: ["engineer", "intern", "None, team complete"],
      name: "employeeType"
    }]
  }
  
  //   * getSchool()
  getSchool(){
      return this.school
  }
 
  //   * getRole() // Overridden to return 'Intern'
  getRole(){
      this.role = "Intern";
      return this.role;
  }
}
// const stan = new Intern("stan", 2, "stan@fakecompany.com", "U of M")

// console.log(stan);

module.exports = Intern;

