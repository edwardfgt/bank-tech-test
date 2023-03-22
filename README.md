# Bank Tech Test

## Requirements

* You should be able to interact with your code via a REPL like IRB or Node.
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).


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

## Acceptance Criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see


```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Getting Started

### Prerequisites
To run this project, you will need to have the following installed on your system:

Node.js: You can download and install the latest version of Node.js from the official website at https://nodejs.org/en/. Make sure to select the appropriate version based on your operating system.

NVM (Node Version Manager): NVM is a version manager for Node.js, which allows you to easily switch between different versions of Node.js on your system. To install NVM, you can follow the instructions provided in the official documentation at https://github.com/nvm-sh/nvm#installation-and-update.

### Installation
To get started with this project, you will need to clone the repository and navigate into the project directory. Here's how:

- Open your terminal and navigate to the directory where you want to clone the repository.
- Clone the repository by running the following command:

```
git clone https://github.com/edwardfgt/bank-tech-test
```

- Navigate into the project directory by running the following command:

```
cd bank-tech-test
```

### Running tests
This project uses Jest for testing. To run all tests, run the following command
```
jest
```


## Example

Here is an example of how you could run this program.
```
const BankAccount = require('./bankAccount')
let bankAccount = new BankAccount();
bankAccount.deposit(100);
bankAccount.deposit(500);
bankAccount.withdraw(50);
bankAccount.getStatement();
```
Expected return
```
date || credit || debit || balance
22/03/23 || || 50.00 || 550.00
22/03/23 || 500.00 || || 600.00
22/03/23 || 100.00 || || 100.00
```