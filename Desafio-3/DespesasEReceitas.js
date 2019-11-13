const users = [
  {
    name: 'Salvio',
    revenue: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: 'Marcio',
    revenue: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lucia',
    revenue: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]
function lista(users){
  for (i = 0; i < users.length; i++){
    calculateBalance(users[i].revenue)
    //console.log(users[i].revenue);
  }
}

function calculateBalance(array){
  console.log(array);


  for(i =0; i< array.length; i++){
    console.log(array[i]);
  }
  
}
  
  lista(users)