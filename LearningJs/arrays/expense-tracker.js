const anishAccount = {
    name: 'Anish',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense) { //callback function to addup all totalExpenses
            totalExpenses = totalExpenses + expense.amount
        })

        this.incomes.forEach(function(income) { //callback function to addup all totalExpenses
            totalIncome = totalIncome + income.amount
        })

        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} is income. $${totalExpenses} in expenses.`
    }
}

//add income or expense here

anishAccount.addExpense('rent', 5000)
anishAccount.addExpense('airpod', 2000)
anishAccount.addExpense('tea', 30)
anishAccount.addIncome('job', 25000)
anishAccount.addExpense('tea', 30)
anishAccount.addExpense('tea', 30)


// dumping on screen 
console.log(anishAccount.getAccountSummary())

console.log(`Expenses are-`)
for (let count = 0; count < anishAccount.expenses.length; count++) { //list all expenses
    console.log(anishAccount.expenses[count])
}
console.log(`Incomes are-`)
for (let count = 0; count < anishAccount.incomes.length; count++) { //list all income
    console.log(anishAccount.incomes[count])
}