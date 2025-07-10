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

Display:
    * This has multiple useful CLI based views (getName() etc)

*/

let accounts = []                                                // Needed as a temp database, accounts.length will allocate the id
let customers = [];                                              // Needed as a temp database, customers.length will allocate the id
let transactions = [];                                           // Needed as a temp database, transactions.length will allocate the id


// Overall system
class Bank{

    constructor(custServ, accServ, transServ, display){

        // Bank uses the systems to manipulate the flow and overall program
        this.custServ = custServ;
        this.accServ = accServ;
        this.transAmount = transServ;
        this.display = display;
    }

    register(){
        display.registerMessage();
        let fName = display.getFName();
        let lName = display.getLName();

        this.custServ.createCustomer(fName, lName);

        // Testing
        // console.log(`Customer should now appear in customers: {${customers[0].firstName},  ${customers[0].lastName}}`);
    }

    run(){
        this.register();
    }
}


// Services
class CustomerService{

    constructor(){
        this.customer = new Customer();
    }

    createCustomer(firstName, lastName){                        
        const cust = new Customer(firstName,lastName);
        customers.push(cust);
        this.customer = cust;                                         // Set so once created, custServ manages that Customer
    }
}

class AccountService{
    
    constructor(){
        this.account = new Account();
    }
}

class TransactionService{
    
    constructor(){
        this.transaction = new Transaction();
    }
}


// Models
class Customer {

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = [];
        this.id = customers.length - 1;
    }

}

class Account {

    constructor(customer, balance, id){
        this.customer = new Customer();
        this.transactions = [];
        this.id = accounts.length - 1;
    }

}

class Transaction{

    constructor(senderAcc, recipientAcc, transAmount){
        this.senderAcc = new Account();
        this.recipientAcc = new Account();
        this.transAmount = transAmount;
        this.id = transactions.length - 1;
    }
}


// Display
class Display{

    constructor(){

    }

    getFName(){
        return prompt.question("What is your first name?\n");
    }

    getLName(){
        return prompt.question("What is your last name?\n");
    }

    registerMessage(){
        console.log("In Order to register we need your first and last name!");
    }

    loginMessage(){
        console.log("Enter your the first and last name you used to open an account!");
    }

}

// Initialisation and Setup
const custService = new CustomerService();
const accService = new AccountService();
const transService = new TransactionService();
const display = new Display();

const bank = new Bank(custService, accService, transService, display);
bank.run();
