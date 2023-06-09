const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
    describe('it returns the bank account balance', () => {
        it("returns the starting balance as 0", () => {
            const bankAccount = new BankAccount();
            expect(bankAccount.getBalance()).toEqual(0);
        })
    
        it("returns the balance after the user makes deposits", () => {
            const bankAccount = new BankAccount();
            bankAccount.deposit(100);
            expect(bankAccount.getBalance()).toEqual(100);
            bankAccount.deposit(500);
            expect(bankAccount.getBalance()).toEqual(600);
        })
        
        it("returns the balance after the user makes withdrawals", () => {
            const bankAccount = new BankAccount();
            bankAccount.deposit(1000);
            bankAccount.withdraw(500);
            expect(bankAccount.getBalance()).toEqual(500);
        })
    
        it("prompts the user they cannot withdraw money if balance will fall below 0", () => {
            const bankAccount = new BankAccount();
            bankAccount.deposit(1000);
            expect(bankAccount.withdraw(1100)).toEqual("Not enough money");
            expect(bankAccount.getBalance()).toEqual(1000);
        })
    })

    describe("it stores all statements in array of objects", () => {
        it("returns an empty array when no deposits have been made", () => {
            const bankAccount = new BankAccount();
            expect(bankAccount.getStatement()).toEqual([]);
            expect(bankAccount.getStatement()).toBeInstanceOf(Array);
        })

        it("returns an array containing one object once one deposit has been made", () => {
            const bankAccount = new BankAccount();
            bankAccount.addToStatements({date: "20/03/2023", type: "deposit", value: 1000, balance: 1000});
            expect(bankAccount.getStatement()).toEqual([{date: "20/03/2023", type: "deposit", value: 1000, balance: 1000}]);
        })

        it("returns an array containing two objects once one deposit and one withdrawal has been made", () => {
            const bankAccount = new BankAccount();
            bankAccount.addToStatements({date: "20/03/2023", type: "deposit", value: 1000, balance: 1000});
            bankAccount.addToStatements({date: "21/03/2023", type: "withdrawal", value: 800, balance: 200});
            expect(bankAccount.getStatement().length).toEqual(2);
        })
    })

    describe("it returns a statement with users transactions", () => {
        it("returns statement headers when statement is printed with 0 transactions", () => {
            const bankAccount = new BankAccount();
            expect(bankAccount.formatStatement()).toEqual("date || credit || debit || balance");
        })
    
        it("returns statement with deposit and balance after user deposits money into the account", () => {
            const bankAccount = new BankAccount();
            bankAccount.addToStatements({date: "21/03/23", type: "deposit", value: 5000, balance: 5000});
            console.log("statements ",bankAccount.getStatement());
            expect(bankAccount.formatStatement()).toEqual("date || credit || debit || balance\n21/03/23 || 5000.00 || || 5000.00");
        })

        it("returns statement with deposit and withdrawal balance after user deposits and withdraws money from the account", () => {
            const bankAccount = new BankAccount();
            bankAccount.addToStatements({date: "20/03/23", type: "deposit", value: 5000, balance: 5000});
            bankAccount.addToStatements({date: "20/03/23", type: "withdrawal", value: 250, balance: 4750});
            console.log("statements ",bankAccount.getStatement());
            expect(bankAccount.formatStatement()).toEqual("date || credit || debit || balance\n20/03/23 || || 250.00 || 4750.00\n20/03/23 || 5000.00 || || 5000.00");
        })
    })
})
