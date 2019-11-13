const developer ={
    name: 'Caio',
    age: 27,
    tecnlogies:[
        {name: 'C++', specialty: 'Desktop'},
        {name: 'Python', specialty: 'Data Science'},
        {name: 'JavaScript', specialty: 'Web/Mobile'}
    ]
}

console.log(`The developer ${developer.name} has ${developer.age} years and use the tecnology ${developer.tecnlogies[0].name} with specialty in ${developer.tecnlogies[0].specialty}`);
