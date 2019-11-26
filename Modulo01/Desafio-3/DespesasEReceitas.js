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

function list(users){
  for (let i = 0; i < users.length; i++){
    calculateBalance(users[i].revenue, users[i].expenses, users[i].name)
  }
}

function calculateBalance(revenue, expenses, name){
    sumNumbers(revenue, expenses, name)
}

function sumNumbers(revenue, expenses, name){
  totalRevenue = 0
  totalExpenses = 0
  balance = 0
  name = name

  for (let i = 0; i < revenue.length; i++){
    totalRevenue = totalRevenue + revenue[i]
  }
  for (let i = 0; i < expenses.length; i++){
    totalExpenses = totalExpenses + expenses[i]
  }

balance = totalRevenue - totalExpenses

if (balance <= 0){
  console.log(`${name} has a NEGATIVE balance of ${balance.toFixed(2)}`);
}else{
  console.log(`${name} has a POSITIVE balance of ${balance.toFixed(2)}`);
}

}
  
  list(users)