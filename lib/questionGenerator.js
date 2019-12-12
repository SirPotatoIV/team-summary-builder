const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "Hello, what is the employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "Hello, what is the employee's e-mail address?",
        name: "email"
    },

]
function additionalQuestion(){
    const answers = "engineer";
    
    switch(answers) {
        case "intern":
            questions.push({
                type: "input",
                message: "What school does this intern attend?",
                name: "school"
            })
        case "engineer":
                questions.push({
                    type: "input",
                    message: "What is the engineer's github username?",
                    name: "github"
                })
    }
    console.log(questions)
}
additionalQuestion();