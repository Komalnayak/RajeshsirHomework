// Hiral Kanakia3:
// /* Knowing Responsibility */
var nBalance = 0;
var nLastTransaction = 0;
var strTransation = "";

function statement()
{
    console.log("balance = " + nBalance);
    console.log("last transaction = " + strTransation + " " + nLastTransaction);
}

function deposit(nDepositAmount)
{
    nBalance += nDepositAmount;
    nLastTransaction = nDepositAmount;
    strTransation = "deposit";
    //statement();
}
function withdrawal(nWithdrawalAmount)
{
    nLastTransaction = nWithdrawalAmount;
    if(nBalance < nWithdrawalAmount) return; 
    nBalance -= nWithdrawalAmount;
    strTransation = "withdrawal";
}
    deposit(50);
    statement();
    withdrawal(10);
    statement();

// Brijesh Acharya3:28 PM
// function withdraw(amount)
// {
//     if (amount > balance)
//     {
//         console.log("Insufficient balance");
//         return;
//     }

//     balance -= amount;
//     lt = amount;
// }
// Hiral Kanakia3:32 PM
// to print last transaction
// Brijesh Acharya3:40 PM
// yes sir
// Anand Thakkar3:40 PM
// just representation 
// You3:43 PM
// transaction? 
// Jigisha Gajjar3:44 PM
// credit or debit.. if it's debit then put it in a bracket ()
// Riddham Gadia3:57 PM
// it will get withdrawn
// Kash Mehta3:58 PM
// Someone keeps removing me
// Anand Thakkar3:59 PM
// function deposite(amount) {
//   if (amount > 0) {
//     balance += amount;
//     lt = amount;
//   }
// }
// Brijesh Acharya4:02 PM
//     if (amount <= 0)
//     {
//         console.log("Deposit amount should be greater than 0");
//         return;
//     }
// Riddham Gadia4:07 PM
// done sir
// Riddham Gadia4:10 PM
// sir its not letting me post the complete code.
// some part of it is getting cut
// Hitixa Jagarnate4:10 PM
// var currenBalance = 0;
// var previousBalance = 0;

// //Doing Responsiblity:
// function deposit(amount) {
//   if (amount <= 0) {
//     log("Deposit amount should be greater than 0");
//     return;
//   }
//   log("This is a deposit function");
//   currenBalance += amount;
//   previousBalance = currenBalance-amount;
// }

// function withdraw(amount) {
//   log("This is a withdraw function");
//   if (currenBalance >= amount) {
//     currenBalance -= amount;
//     previousBalance = -amount;
//     log(`You have withdrwan  Rs. ${a
// Brijesh Acharya4:11 PM
// function statement()
// {
//     console.log("Balance = " + currentbalance);
//     if (currentbalance > previousbalance)
//     {
//         console.log("Last Transaction was deposit of Rs. " + (currentbalance - previousbalance));
//     }
//     else if (currentbalance < previousbalance)
//     {
//         console.log("Last Transaction was withdrawal of Rs. " + (currentbalance - previousbalance));
//     }
// }
//  function deposit(amount)
// {
//     if (amount <= 0)
//     {
//         console.log("Deposit amount should be greater than 0");
//         return;
//     }
//     previousbalance = currentbalance;
//     currentbalance += amount;
//     //lt = amount;
//     console.log("You deposited Rs." + amount);

//     mayur dhakka4:33 PM
// /* knowing responsibility */
var currentBalance = 0;
var previousBalance = 0;
var transactionLog = [];

//statement();

function updateTransactionLog(current,previous, type){
    transactionLog.push({current,previous,type});
}

function statement(){
    for(var i of transactionLog){
        console.log(i);
    }
}

function deposit(amount){
    if(amount <= 0 ){
        console.log(" Deposit amount should be greater than 0")
        return;
    }
    previousBalance = currentBalance;
    currentBalance += amount;
}

//deposit(80);
statement();
updateTransactionLog(100,20,30)