const users = [
    {name: 'Carlos', tecnolgies: ['HTML', 'CSS']},
    {name: 'Jasmine', tecnolgies: ['JavaScript', 'CSS']},
    {name: 'Tuane', tecnolgies: ['HTML', 'Node.js']}
]

for (i = 0; i < users.length; i++){
    console.log(`${users[i].name}, works with ${users[i].tecnolgies}`);
    
}

function checkIfUserUsesCSS (user){
    for (i = 0; i < user.length; i++){
        let userUseCSS = user[i].tecnolgies
        if('CSS' == userUseCSS[0]||'CSS' == userUseCSS[1]){
            console.log(`The developer ${user[i].name} works with CSS`); 
        }
    }
}

checkIfUserUsesCSS(users) 