

let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате 'YYYY-MM-DD'", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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


console.log("Ваш бюджет на один день: " + appData.budget/30);
