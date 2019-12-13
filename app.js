const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:
const team = [];
function createTeam(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
            const {name, id, email, officeNumber, employeeType} = answers;
            teamManager = new Manager(name, id, email, officeNumber);
            console.log(teamManager);
        });
    
}
createTeam();