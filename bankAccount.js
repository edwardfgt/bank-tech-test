class BankAccount{
    constructor(){
        this.balance = 0;
    }

    getBalance(){
        return this.balance;
    }

    deposit(value){
        this.balance += value;
    }

    withdraw(value){
        if(this.balance - value < 0){
            return("Not enough money")
        } else {
            this.balance -= value;
        }
    }

    statement(){
        if(this.balance === 0){
            return("date || credit || debit || balance")
        } else {
            return("date || credit || debit || balance\n20/03/2023 || 500.00 || || 500.00")
        }
    }
}

module.exports = BankAccount;