class BankAccount{
    constructor(){
        this.balance = 0;
        this.statements = [];
        this.header = "date || credit || debit || balance"
    }

    getBalance(){
        return this.balance;
    }

    getStatement(){
        return this.statements;
    }

    deposit(value){
        this.balance += value;
        let newDeposit = {date: this.formatDate(), type: "deposit", value: value, balance: this.balance};
        console.log("new deposit ", newDeposit)
        this.addToStatements(newDeposit);
    }

    formatDate(){
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear().toString().slice(-2);
        let formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }


    withdraw(value){
        if(this.balance - value < 0){
            return("Not enough money")
        } else {
            this.balance -= value;
            let newWithdrawal = {date: this.formatDate(), type: "withdrawal", value: value, balance: this.balance};
            console.log("new withdrawal ", newWithdrawal)
            this.addToStatements(newWithdrawal);
        }
    }

    addToStatements(object){
        this.statements.push(object);
    }

    formatStatement(){
        if(this.balance === 0){
            return("date || credit || debit || balance")
        } else {
            let finalStatement = "date || credit || debit || balance"
            this.statements.reverse().forEach(statement => {
                console.log(statement)
                if(statement.type === "deposit"){
                    finalStatement += `\n${statement.date} || ${statement.value} || || ${statement.balance}`
                } else {
                    finalStatement += `\n${statement.date} || || ${statement.value} || ${statement.balance}`
                }
            })
            return finalStatement;
        }
    }
}

module.exports = BankAccount;