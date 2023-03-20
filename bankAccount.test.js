const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
    it("returns statement headers when statement is printed with 0 transactions", () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.statement()).toEqual("date || credit || debit || balance");
    })
})
