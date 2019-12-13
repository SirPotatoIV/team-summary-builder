const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Used to get questions
const tempEngineer = new Engineer;
const tempIntern = new Intern;
// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:
const team = [];
function initialQuestions(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
            const {name, id, email, officeNumber, employeeType} = answers;
            teamManager = new Manager(name, id, email, officeNumber);
            team.push(teamManager);
            console.log(team);
            createTeamMembers(employeeType);
        });
    
}
initialQuestions();

function createTeamMembers(employeeType){

    switch(employeeType){
        case "engineer":
            inquirer
            .prompt(tempEngineer.questions)
            .then(answers => {
                const {name, id, email, github, employeeType} = answers;
                console.log(name, id, email, github, employeeType);
                
            });
            // break;
        // case "intern":
        //     console.log("intern")
        //     break;
        // case "None, team complete":
        //     console.log("team complete")
        //     break;
    }
}

function askQuestions(){

    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
            const {name, id, email, officeNumber, employeeType} = answers;
            teamManager = new Manager(name, id, email, officeNumber);
            team.push(teamManager);
            console.log(team);
            createTeamMembers(employeeType);
        });
}