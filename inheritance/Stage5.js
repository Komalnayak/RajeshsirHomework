//Object Oriented Modelling - Prototype
//console.log(pg1.__proto__.deposit == Piggybank.prototype.deposit); --->which will true

function deposit(v)
{
    this.balance = this.balance + v;
    this.lt = v;
    
}
function withdraw(v)
{
    if (this.balance >= v)
    {
        this.balance = this.balance - v;
        this.lt = -v;
    }
    
}

function statement()
{
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
  
}
function statement2()
{
    console.log("Test");
   
}
function PiggyBank()
{
    this.balance = 0;
    this.lt = 0;
}

PiggyBank.prototype.deposit = deposit;
PiggyBank.prototype.withdraw = withdraw;
PiggyBank.prototype.statement = statement;
PiggyBank.prototype.statement2 = statement2;

var pg1 = new PiggyBank();

pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();
pg1.statement2(); 

var pg2 = new PiggyBank();

pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();

