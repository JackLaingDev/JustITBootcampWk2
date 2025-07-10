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
        this.transServ = transServ;
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

    customerChoose(choice){
        switch(choice){
            case 1: this.accServ.createAccount(this.custServ.customer); display.accountSuccess(); break;
            case 2: this.custServ.showAccounts(); break;
            case 3: this.transferMenu(); break;
        }
    }

    transferMenu(){
        display.transferMessage();
        display.senderAccMessage();
        let senderId = utility.getNumber();
        display.recipientAccMessage();
        let recipientId = utility.getNumber();
        display.transAmountMessage();
        let amount = utility.getNumber();

        let senderAcc = utility.getAccById(senderId);
        let recipientAcc = utility.getAccById(recipientId);

        transService.makeTransfer(senderAcc, recipientAcc, amount);
        
    }

    customerMenu(){
        display.customerOptions();
        let choice = utility.getNumber();
        this.customerChoose(choice);

        // Testing
        // console.log(`Account should now appear in: ${accounts}`);
    }

    run(){
        if(!custService.customer){

            // TODO: add login option
            this.register();
        }


        // Main loop
        while(true){
            this.customerMenu();
        }

    }
}


// Services
class CustomerService{

    constructor(){
        this.customer = null;
    }

    createCustomer(firstName, lastName){                        
        const cust = new Customer(firstName,lastName);
        customers.push(cust);
        this.customer = cust;                                         // Set so once created, custServ manages that Customer
    }

    showAccounts(){
        const custAccounts = this.customer.accounts;

        console.log("Accounts:\n");
        for(const acc of custAccounts){
            display.displayAccount(acc);
        }
    }

}

class AccountService{
    
    constructor(){
        this.account = null;
    }

    createAccount(customer){
        const id = accounts.length + 1;
        const acc = new Account(customer,0, id);
        customer.accounts.push(acc);
        accounts.push(acc);
    }
}

class TransactionService{
    
    constructor(){
        this.transaction = null;
    }

    createTransaction(senderAcc, recipientAcc, amount){
        const trans = new Transaction(senderAcc, recipientAcc, amount);

        // Add to each accounts local transactions list
        senderAcc.transactions.push(trans);
        recipientAcc.transactions.push(trans);

        // Add to global transactions list
        transactions.push(trans);

    }

    makeTransfer(senderAcc, recipientAcc, amount){

        if(senderAcc.balance >= amount){
            // enough funds for trans to go through
            senderAcc.balance -= amount;
            recipientAcc.balance += amount;
            this.createTransaction(senderAcc, recipientAcc, amount);
        }
        else if(senderAcc.balance <= amount){

        }
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

}

class Account {

    constructor(customer, balance, id){
        this.customer = new Customer();
        this.transactions = [];
        this.balance = 1000;
        this.id = accounts.length;
    }

}

class Transaction{

    constructor(senderAcc, recipientAcc, transAmount){
        this.senderAcc = senderAcc;
        this.recipientAcc = recipientAcc;
        this.transAmount = transAmount;
        this.id = transactions.length;
    }
}


// Display
class Display{

    constructor(){

    }

    chooseOption(){
        console.log("\nChoose an option by entering its corresponding number:");
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

    customerOptions(){
        this.chooseOption();
        console.log("1. Create Account\n2. View Accounts\n3. Transfer between Accounts");
    }

    accountSuccess(){
        console.log(`Account create successfully!`);
    }

    displayAccount(account){
        console.log(`${account.id}. Balance: ${account.balance}`);
    }

    transactionSuccess(){
        console.log("Transaction completed successfully!");
    }

    senderAccMessage(){
        console.log("Please enter the Id of the account you want to transfer money from!");
    }

    recipientAccMessage(){
        console.log("Please enter the Id of the account you want to transfer money to!");
    }

    transferMessage(){
        console.log("You have chosen to make a transaction!");
    }

    transAmountMessage(){
        console.log("Enter the amount you want to transfer:");
    }

}

// Utility functions
class Utility{

    constructor(){

    }

    getNumber(){
        return Number(prompt.question());
    }

    getAccById(id){
        return accounts[id];
    }
}

// Initialisation and Setup
const custService = new CustomerService();
const accService = new AccountService();
const transService = new TransactionService();
const display = new Display();
const utility = new Utility();

const bank = new Bank(custService, accService, transService, display);
bank.run();
