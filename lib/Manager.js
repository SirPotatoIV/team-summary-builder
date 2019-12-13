const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber)

    //   * officeNumber 
    this.officeNumber = officeNumber;
    this.questions = [...this.primaryQuestions, 
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    },
    {
      type: "list",
      message: "What type of employee would you like to add to your team?",
      choices: ["engineer", "intern", "None, team complete"],
      name: "employeeType"
    }]
  }
  
  //   * getofficeNumber()
  getOfficeNumber(){
      return this.officeNumber
  }
 
  //   * getRole() // Overridden to return 'Manager'
  getRole(){
      this.role = "Manager";
      return this.role;
  }
}
// const betty = new Manager("Betty", 2, "betty@fakecompany.com", 12)
// // betty.getRole()
// console.log(betty);

module.exports = Manager;