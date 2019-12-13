const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber)

    //   * officeNumber 
    this.officeNumber = officeNumber;
    this.role = "manager"
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
    this.html = `
    <div class = "card">
        <div class = "header">
            <div class = "name">${this.name}</div>
            <div class = "title">${this.role}</div>
        </div>
        <div>ID: ${this.id}</div>
        <div>Email: ${this.email}</div>
        <div>Office Number: ${this.officeNumber}</div>
    </div>`
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
// console.log(betty);

module.exports = Manager;