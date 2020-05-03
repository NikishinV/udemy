let money, time, optExp;


function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате 'YYYY-MM-DD'", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++){
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
    let expensesCost = +prompt("Во сколько обойдется?", "");

    if( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
    && expensesName != '' && expensesCost != '' && expensesName.length<50){
        console.log('done');
        appData.expenses[expensesName] = expensesCost;
    } else {
        alert("Что-то пошло не так");
        i--;
    }
}

}

chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежидневный бюджет " + appData.moneyPerDay);
}

detectDayBudget();





console.log("Ваш бюджет на один день: " + appData.budget/30);
function checkSavings() {
    if(appData.savings == true){
        let save = +prompt("Какова сумма наеоплений?", ""),
        percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();


function detectLevel() {
    
if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}

}

detectLevel();

function chooseOptExpenses() {
    for( let i = 1; i < 4; i++){
        optExp = prompt("Статья необязательных расходов");
        appData.optionalExpenses[i] = optExp;
    }
    
}

chooseOptExpenses();






// let i = 50;
// while(i < 52){ 
//     i++;
//     let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let expensesCost = +prompt("Во сколько обойдется?", "");

//     if( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
//     && expensesName != '' && expensesCost != '' && expensesName.length<50){
//         console.log('done');
//         appData.expenses[expensesName] = expensesCost;
//     } else {
//         alert("Что-то пошло не так");
//         i--;
//     }
   
// }




// let i = 0;
// do {
//     i++;
//     let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let expensesCost = +prompt("Во сколько обойдется?", "");

//     if( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
//     && expensesName != '' && expensesCost != '' && expensesName.length<50){
//         console.log('done');
//         appData.expenses[expensesName] = expensesCost;
//     } else {
//         alert("Что-то пошло не так");
//         i--;
//     }
// } while(i < 2);