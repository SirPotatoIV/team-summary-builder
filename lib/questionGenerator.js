function generate(state){
    console.log(state)
    debugger
    let questions =[];
    switch(state){
        case "initial":
           questions = managerQuestions();
           break;
        case "employee":
           questions = employeeQuestions();
           break;
        }
        return questions;
        // console.log(questions);
}

function managerQuestions(){
    console.log("manager");
    questions = [
        {
            type: "input",
            message: "Hello, what is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "What type of employee would you like to add to your team?",
            choices: ["Engineer", "Intern"],
            name: "type"
        }];
        return questions;
}

function employeeQuestions(employeeType){
    console.log("intern/engineer")
    const questions = [
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's e-mail address?",
            name: "email"
        },
    ]
    switch(employeeType) {
        case "intern":
            questions.push({
                type: "input",
                message: "What school does this intern attend?",
                name: "school"
            })
            break;
        case "engineer":
            questions.push({
                type: "input",
                message: "What is the engineer's github username?",
                name: "github"
            })
            break;
    }
    questions.push({
        type: "list",
        message: "What type of employee would you like to add to your team?",
        choices: ["Yes", "No"],
        name: "type"
    })
    return questions
}
// employeeQuestions();
// generate("employee");
module.exports = generate;