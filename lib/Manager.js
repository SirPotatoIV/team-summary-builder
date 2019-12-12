const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber)

    //   * officeNumber 
    this.officeNumber = officeNumber;
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
// betty.getRole()
// console.log(betty);

module.exports = Manager;