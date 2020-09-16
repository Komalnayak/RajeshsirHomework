//PiggyBank in an Object
 //* Knowing Responsibility
    var pg = {
        balance = 0,
        lt = 0
    }
//doing Responsibility

    function statment(){
        console.log("This is a stament balance" + pg.balance);
        console.log("lt =" + pg.lt);
    
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
        if (amt <= pg.balance)
            pg.balance = pg.balance - amt;
            pg.lt = amt;  
        }
       
    
    deposit(20);
    statment();
    withdraw(2);
    statment();
      