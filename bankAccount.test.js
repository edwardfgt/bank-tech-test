const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
    it("returns statement headers when statement is printed with 0 transactions", () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.statement()).toEqual("date || credit || debit || balance");
    })

    it("returns statement with deposit and balance after user deposits money into the account", () => {
        const bankAccount = new BankAccount();
        bankAccount.deposit(5000)
        expect(bankAccount.statement()).toContain("20/03/2023 || 500.00 || || 500.00");
    })

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
})
