# Bank Tech Test


***- [Bank Tech Test](#bank-tech-test)

***

## Requirements

* You should be able to interact with your code via a REPL like IRB or Node.
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Class Design
- Singular class - bank account

## User stories
As a customer
So that I can view my balance
I want to be able to see my print my initial balance on a statement

As a customer
So that I can add money to my account
I want to be able to deposit money into my bank

As a customer
So that I can spend my money
I want to be able to withdraw money from my bank account

As a customer
So that I know when I made a transaction
I want to be able to view my statement with the correct dates

## Testing
Acceptance Criteria
const BankAccount = new BankAccount();
BankAccount.deposit(1000, 10-01-2023)
BankAccount.deposit(2000, 13-01-2023)
BankAccount.withdraw(500, 14-01-2023)
Expect(BankAccount.statement()).toEqual(
    date || credit || debit || balance
    14/01/2023 || || 500.00 || 2500.00
    13/01/2023 || 2000.00 || || 3000.00
    10/01/2023 || 1000.00 || || 1000.00
)


