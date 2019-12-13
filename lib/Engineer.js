const Employee = require("./Employee");

// In addition to `Employee`'s properties and methods, `Engineer` will also have:
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github)
    //   * github  // GitHub username
    this.github = github;
    this.questions = [...this.primaryQuestions, 
      {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github"
    },
    {
      type: "list",
      message: "What type of employee would you like to add to your team?",
      choices: ["Engineer", "Intern", "None, team complete"],
      name: "employeeType"
    }]
  }
  //   * getGithub()
  getGithub(){
      return this.github
  }
  //   * getRole() // Overridden to return 'Engineer'
  getRole(){
      this.role = "Engineer";
      return this.role;
  }
}
// const testEngineer = new Engineer("Ted", "1", "ted@abc.com", "Ted12")
// console.log(testEngineer);
module.exports = Engineer;