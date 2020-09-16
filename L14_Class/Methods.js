// Method ????

class PiggyBank{
    constructor(){
      this.balance = 0;
      this.lt = 0;
      console.log("bal_constructor--->" + this.balance);
    }
   
    deposit(v){
        if(v > 0){
          this.balance += v;
          this.lt = v;
          console.log("bal D --->" + v);
          console.log("bal--->" + this.balance);
        }
    }
   
    withdraw(v){
        if(v > 0 && v <= this.balance){
          this.balance -= v;
          this.lt = -v;
        }
    }
   
    statement(){
       console.log("Balance = " + this.balance);
       console.log("Last Transaction = " + this.lt);
    }
   }
   
   var pg1 = new PiggyBank();
   pg1.deposit(100);
   pg1.deposit(50);
   pg1.statement();
   pg1.withdraw(25);
   pg1.statement();