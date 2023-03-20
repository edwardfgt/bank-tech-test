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
})
