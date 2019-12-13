class Employee {
    // Create a constructor for employee with agruments name, id, email
    constructor(name, id, email){
        // Add the properities name, id, title, email
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        this.primaryQuestions = [
            {
                type: "input",
                message: "name?",
                name: "name"
            },
            {
                type: "input",
                message: "id?",
                name: "id"
            },
            {
                type: "input",
                message: "email address?",
                name: "email"
            }
        ]
        this.html = "";
    }

    // Add methods getName, getId, getEmail to return the corresponding properties
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    // Add method getRole to return a new Employee, which you pass name, id, and email
    getRole(){
        return this.role;
    }
}


// Diff employee types should inherit some methods and properties 
// from a base class of `Employee`.
// -- Create a class called Employee, which will be the super of the other objects
// prompt the user 
// -- email, id, and specific information based on their role

// The first class is an `Employee` parent class with the following properties and
// methods:

// * name
// * id
// * title
// * getName()
// * getId()
// * getEmail()
// * getRole() // Returns 'Employee'
module.exports = Employee;
