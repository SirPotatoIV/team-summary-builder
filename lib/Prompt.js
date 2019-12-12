const inquirer = require('inquirer')
function initialPrompt(){
    // * Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) 
    // to prompt the user for their name, id, email, and specific information based on their role with the company. 
    // For instance, an intern may provide their school, 
    // whereas an engineer may provide their GitHub username.
        const questions = [
            {
                type: "input",
                message: "Hello, what is your name?",
                name: "name"
            },
            {
                type: "list",
                message: "What kind of employee would you like to add?",
                choices: ["Engineer", "Intern"],
                name: "type"
            }
        ]
            
    inquirer
        .prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
        });
    }
initialPrompt()

// prompt the user for information about the team manager
// prompt information about the team members
// -- The user can input any number of team members