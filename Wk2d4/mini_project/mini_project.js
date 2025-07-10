const prompt = require("readline-sync");

/*
This Project is to demonstrate a basic CLI based banking system within JS.

Overall System:
    * Bank -       This acts as a controller for the overall flow of the program using the services

Services:
    * custService - This handles all customer business logic (create customer, remove customer, etc.)
    * accService - This handles all account business logic (withdraw, deposit, etc.)
    * transService - This handles all transaction business logic (make transfer, etc.)

Models:
    * Customer -    This stores personal data to create the 'profile' of the individual, as well as their Accounts.
    * Account -     This stores banking info like balance, transactions etc.
    * Transaction - This stores transaction info like sender and recipient Ids and transaction amount



*/

let accounts = []                                                // Needed as a temp database, accounts.length will allocate the id
let customers = [];                                              // Needed as a temp database, customers.length will allocate the id
let transactions = [];                                           // Needed as a temp database, transactions.length will allocate the id


// Overall system
class Bank{

    constructor(){
        
    }
}


// Models
class Customer {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = [];
        this.id = customers.length;
    }

    createCustomer(firstName, lastName){                         // USE INSTEAD OF INSTRUCTOR TO ENSURE CUST IS ADDED TO customers[]!
        const cust = new Customer(firstName,lastName);
        customers.push(cust);
    }

}

class Account {

    constructor(customer, balance, id){
        this.customer = customer;
        this.transactions = [];
        this.id = id;
    }

}

class Transaction{

    constructor(senderAcc, recipientAcc, transAmount){
        this.senderAcc = senderAcc;
        this.recipientAcc = recipientAcc;
        this.transAmount = transAmount;
    }
}


// Services
class CustomerService{

    constructor(customer){
        this.customer = customer;
    }
}

class AccountService{
    
    constructor(account){
        this.account = account;
    }
}

class TransactionService{
    
    constructor(transaction){
        this.transaction = transaction;
    }
}
