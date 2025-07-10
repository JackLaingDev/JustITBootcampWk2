const prompt = require("readline-sync");

/*
This Project is to demonstrate a basic CLI based banking system within JS.

Classes:
    * Customer -    This stores personal data to create the 'profile' of the individual, as well as their Accounts.
    * Account -     This stores banking info like balance, transactions etc.
    * Transaction - This stores transaction info like sender and recipient Ids and transaction amount



*/

let customers = [];                                              // Needed as a temp database, customers.length will allocate the id

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

    constructor(customer, id){
        this.customer = customer;
        this.transactions = [];

    }

}

