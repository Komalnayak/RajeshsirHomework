//* Knowing Responsibility
var balance = 0;
var lt = 0;

//Doing Responsibility

function statment(){
    console.log("This is a stament balance" + balance);
    console.log("lt =" + lt);
}

function deposit(amt){
    console.log("Welcome to deposit function");
    pg.balance += amt;
    pg.lt = amt;
    console.log("This is a deposit = + " + "  " + amt);
    console.log("This is a last transation" + " "+ pg.lt);
}

function withdraw(amt){
    console.log("This is withdraw = - " + " " + amt);
    if (pg.balance < amt)
        return;
        pg.balance = pg.balance - amt;
        pg.lt = amt;  
    }
   

deposit(20);
statment();
withdraw(2);
statment();
  