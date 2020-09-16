//Multiple PiggyBank
var pg1 = {
    balance: 0,
    lt: 0
};

var pg2 = {
    balance: 0,
    lt: 0
};

function deposit1(v)
{
    pg1.balance = pg1.balance + v;
    pg1.lt = v;
}
function withdraw1(v)
{
    if (pg1.balance >= v)
    {
        pg1.balance = pg1.balance - v;
        pg1.lt = -v;
    }
}
function statement1()
{
    console.log("Pg1 Balance = " + pg1.balance);
    console.log("Pg1 Last Transction = " + pg1.lt);
}




function deposit2(v)
{
    pg2.balance = pg2.balance + v;
    pg2.lt = v;
}
function withdraw2(v)
{
    if (pg2.balance >= v)
    {
        pg2.balance = pg2.balance - v;
        pg2.lt = -v;
    }
}
function statement2()
{
    console.log("Pg2 Balance = " + pg2.balance);
    console.log("Pg2 Last Transction = " + pg2.lt);
}


deposit1(100);
statement1();
withdraw1(50);
statement1();
withdraw1(10);
statement1();


deposit2(200);
statement2();
withdraw2(100);
statement2();
withdraw2(50);
statement2();
