let myAccount = {
    name: "Anish",
    expenses: 0,
    income: 0,
};

let adarshAccount = {
    name: "Adarsh",
    expenses: 0,
    income: 0,
};

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function(account, income) {
    account.income = account.income + income;
};

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
};

let getSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has balance amount of RS${balance}. Rs${account.income} is income and Rs${account.expenses} is expenses.`;
};

addExpense(myAccount, 60);
addIncome(myAccount, 2000);
console.log(getSummary(myAccount));

addExpense(adarshAccount, 690);
addIncome(adarshAccount, 6000);
console.log(getSummary(adarshAccount));

resetAccount(myAccount);
resetAccount(adarshAccount);

console.log(getSummary(myAccount));
console.log(getSummary(adarshAccount));