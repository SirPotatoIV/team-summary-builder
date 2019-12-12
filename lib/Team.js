class Team {
    // Create a constructor for team
    constructor(){
        // Add the properities state and team members
        this.state = "initial";
        this.teamMembers = [];
        this.teamName = "";
    }

    // Add methods getTeam
    getTeam(){
        return this.teamMembers;
    }
    setTeamName(teamName){
        this.teamName = teamName;
    }
    setState(){
        if(!this.state){
            this.state = "employee";
        }
    }
    createEmployee(employeeData){
        this.teamMembers.push(employeeData);
    }
}


// const testTeam = new Team()
// testTeam.setTeamName("baluga");
// console.log(testTeam);

module.exports = Team;