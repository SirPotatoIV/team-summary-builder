const Employee = require("./Employee");

// In addition to `Employee`'s properties and methods, `Intern` will also have:
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school)

    //   * school 
    this.school = school;
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

