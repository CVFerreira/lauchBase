user = {
    name: 'Caio',
    weight: 81,
    height: 1.72
}

function calculateIMC (weight, height){
    return weight / (height * height)
}

if (calculateIMC >= 30){
    console.log(`${user.name} you are acima above of weight`);
}else {
    console.log(`${user.name} you are not above of weight`);   
}

calculateIMC(user.weight, user.height)