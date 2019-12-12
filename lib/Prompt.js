const inquirer = require('inquirer');
const questionGenerator = require('./questionGenerator');
const Team = require("./Team");
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const newTeam = new Team;

function promptUser(){
    // * Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) 
    // to prompt the user for their name, id, email, and specific information based on their role with the company. 
    // For instance, an intern may provide their school, 
    // whereas an engineer may provide their GitHub username.
    const questions = questionGenerator(newTeam.state);
    // console.log(questions);
    inquirer
        .prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            if(newTeam.state === "initial"){
                const {name, id, email, officeNumber, type} = answers
                employeeData = new Manager(name, id, email, officeNumber);
                newTeam.createEmployee(employeeData);
                console.log("answers, newTeam, type:",answers, newTeam, type)
            }
        });
}
promptUser()

// prompt the user for information about the team manager
// prompt information about the team members
// -- The user can input any number of team members