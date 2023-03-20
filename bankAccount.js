class BankAccount{
    constructor(){
        this.balance = [];
    }

    statement(){
        return("date || credit || debit || balance")
    }
}

module.exports = BankAccount;