person = {
    name: 'Rosangela',
    sex: 'F',
    age: 55,
    contribution: 30
}

const tempoMinimoContribuicaoMan = 35
const tempoMinimoContribuicaoWoman = 30
 
 function calculationRetirement (age, contribution, sex){
    let sum = age + contribution
    let sex = sex
    if (sex == 'F'){
        if(sum >= 85 && contribution >=tempoMinimoContribuicaoWoman){
            console.log(`${person.name} can already retire`);
        }else{
            console.log(`${person.name} can't retire`);
        }
    }else {
        if(sum >= 95 && contribution >=tempoMinimoContribuicaoMan){
         console.log(`${person.name} can already retire`);
        }else{
         console.log(`${person.name} can't retire`);
         }
    }
}

calculationRetirement(person.age, person.contribution, person.sex) 