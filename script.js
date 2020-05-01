

let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате 'YYYY-MM-DD'");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let expensesName = prompt("Введите обязательную статью расходов в этом месяце");
let expensesCost = prompt("Во сколько обойдется?");

let expensesName2 = prompt("Введите обязательную статью расходов в этом месяце");
let expensesCost2 = prompt("Во сколько обойдется?");

appData.expenses.expensesName = expensesCost;
appData.expenses.expensesName2 = expensesCost2;


console.log("Ваш бюджет на один день: " + appData.budget/30);
console.log(appData.expenses);
