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
                const newEngineer = new Engineer(name, id, email, github);
                team.push(newEngineer);
                createTeamMembers(employeeType);
            });
            break;
        case "intern":
            inquirer
            .prompt(tempIntern.questions)
            .then(answers => {
                const {name, id, email, school, employeeType} = answers;
                const newIntern = new Intern(name, id, email, school);
                team.push(newIntern);
                createTeamMembers(employeeType);
                // console.log("intern")
            });   
            break;
        case "None, team complete":
            console.log(team)
            createHtml();
            break;
    }
}

function createHtml(){
    const topHtml = [`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">`]
    for(let i=0; i < team.length; i++){
        topHtml.push(team[i].html);
    }
    console.log(topHtml);

}