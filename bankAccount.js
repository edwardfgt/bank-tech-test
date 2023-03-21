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
        let newDeposit = {date: this.formatDate(), type: "deposit", value: value, balance: this.balance};
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
            this.addToStatements(newWithdrawal);
        }
    }

    addToStatements(object){
        this.statements.push(object);
    }

    formatStatement(){
        if(this.statements.length === 0){
            return("date || credit || debit || balance")
        } else {
            let finalStatement = "date || credit || debit || balance"
            const reversedStatements = [...this.statements].reverse();
            reversedStatements.forEach(statement => {
                if(statement.type === "deposit"){
                    finalStatement += `\n${statement.date} || ${statement.value.toFixed(2)} || || ${statement.balance.toFixed(2)}`
                } else if(statement.type === "withdrawal") {
                    finalStatement += `\n${statement.date} || || ${statement.value.toFixed(2)} || ${statement.balance.toFixed(2)}`
                }
            })
            console.log("finalstatement is ", finalStatement)
            return finalStatement;
        }
    }
}

module.exports = BankAccount;