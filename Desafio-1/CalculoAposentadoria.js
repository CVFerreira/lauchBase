person = {
    name: 'Rosangela',
    sex: 'M',
    age: 65,
    contribution: 30
}

function calculationRetirement (sex){
    
    switch(sex){
         case 'F':
             retirementWoman(person.age, person.contribution)
             break;
         case 'M':  
             retirementMan(person.age, person.contribution)
             break;
         default:
                 console.log('Ivalid parameters');
    }
 }
 
 function retirementWoman(age, contribution){
     let sum = age + contribution
 
     if(sum >= 85){
         console.log(`${person.name} can already retire`);
     }else{
         console.log(`${person.name} can't retire`);
     }
 }
 
 function retirementMan (age, contribution){
    let sum = age + contribution
 
    if(sum >= 95){
     console.log(`${person.name} can already retire`);
     }else{
     console.log(`${person.name} can't retire`);
     }
 }
 
 calculationRetirement(person.sex)

 /*
 function calculationRetirement (age, contribution, sex){
    sum = age + contribution
    sex = sex
    if (sex == 'F'){
        if(sum >= 85){
            console.log(`${person.name} can already retire`);
        }else{
            console.log(`${person.name} can't retire`);
        }
    }else if (sex == 'M'){
        if(sum >= 95){
         console.log(`${person.name} can already retire`);
        }else{
         console.log(`${person.name} can't retire`);
         }
    }else {
        console.log('Invalid parameters')   
    } 
}


calculationRetirement(person.age, person.contribution, person.sex) 
*/
