let money, time, optExp;


function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате 'YYYY-MM-DD'", "");

    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
            let expensesCost = +prompt("Во сколько обойдется?", "");

            if ((typeof (expensesName)) === 'string' && (typeof (expensesName)) != null && (typeof (expensesCost)) != null &&
                expensesName != '' && expensesCost != '' && expensesName.length < 50) {
                console.log('done');
                appData.expenses[expensesName] = expensesCost;
            } else {
                alert("Что-то пошло не так");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежидневный бюджет " + appData.moneyPerDay);
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма наеоплений?", ""),
                percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            optExp = prompt("Статья необязательных расходов");
            appData.optionalExpenses[i] = optExp;
        }
    },
    chooseIncome: function(){
        let items = prompt("Что приносит дополнительный доход? (Перечислите через запятую)", "");
        
        if( (typeof(items)) === "string" && (typeof(items)) != null && items != "" ){
            appData.income = items.split(", ");
            appData.income.sort();
            appData.income.push(prompt("Может что-то ещё?"));
        }else{
            alert("Что-то пошло не так(((");
            appData.chooseIncome();
        }
        appData.income.forEach(function(item, i, mass){
            console.log("Способы доп. зароботка: " + (i + 1) + " - " + item);
        });
    }


};

appData.chooseIncome();

for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
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