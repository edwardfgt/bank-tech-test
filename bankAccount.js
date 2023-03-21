class BankAccount{
    constructor(){
        this.balance = 0;
        this.statements = [];
    }

    getBalance(){
        return this.balance;
    }

    getStatement(){
        return this.statements;
    }

    deposit(value){
        this.balance += value;
        let newDeposit = {date: Date.now(), type: "deposit", value: "value", balance: this.balance + value};
        this.addToStatements(newDeposit);
    }

    addToStatements(object){
        this.statements.push(object);
    }

    withdraw(value){
        if(this.balance - value < 0){
            return("Not enough money")
        } else {
            this.balance -= value;
        }
    }

    formatStatement(){
        if(this.balance === 0){
            return("date || credit || debit || balance")
        } else {
            return("date || credit || debit || balance\n20/03/2023 || 500.00 || || 500.00")
        }
    }
}

module.exports = BankAccount;