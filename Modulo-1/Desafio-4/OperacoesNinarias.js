const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction(transaction){

    user.transactions.push(transaction)
    if( transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(typeTransaction){

    let higherTransaction
    let higherValue = 0
    for (let transaction of user.transactions){
        if(typeTransaction == transaction.type && higherValue < transaction.value){
            higherValue = transaction.value
            higherTransaction = transaction            
        }
    }
    return higherTransaction
}

function getAverageTransactionValue(){

    let balanceTransaction = 0
    for( let transaction of user.transactions){
        
        balanceTransaction += transaction.value
    }
    return balanceTransaction / user.transactions.length
}

function getTransactionsCount (){
    let count= {
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions){
        if ('credit' == transaction.type){
            count.credit ++
        }else{
            count.debit ++
        }
    }
    return count
}
createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 100})
createTransaction({type: 'credit', value: 60})
createTransaction({type: 'debit', value: 30})
createTransaction({type: 'debit', value: 60})

getTransactionsCount()
getAverageTransactionValue()
getHigherTransactionByType('credit')