class Team {
    // Create a constructor for team
    constructor(){
        // Add the properities name, id, title, email
        this.state = "initial";
        this.teamMembers = [];
    }

    // Add methods getName, getId, getEmail to return the corresponding properties
    getTeam(){
        return this.teamMembers;
    }
}


const testTeam = new Team()
console.log(typeof testTeam, testTeam);

module.exports = Team;