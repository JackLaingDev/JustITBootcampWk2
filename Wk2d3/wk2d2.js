const prompt = require("readline-sync");

// THIS FILE IS PURELY FOR WORKING THROUGH BOOTCAMP ACTIVITIES
// DAY 2
const getName = () =>{
    console.log("Hello, what is your name?\n");
    let name = prompt.question();
    return name;
}

const getString = () =>{
    console.log("Input a string\n");
    let string = prompt.question();
    return string;
}

const getAge = () =>{
    console.log("Hello, what is your age?\n")
    let age = prompt.question();
    return age;
}

const getFAnimal = () =>{
    console.log("What is your favourite animal?\n")
    let animal = prompt.question();
    return animal;
}

const getFColour = () =>{
    console.log("What is your favourite colour?\n")
    let colour = prompt.question();
    return colour;
}

const getFFilm = () =>{
    console.log("What is your favourite film?\n")
    let animal = prompt.question();
    return animal;
}

const getBreakfast = () =>{
    console.log("Hello, what is your breakfast?\n")
    let breakfast = prompt.question();
    return breakfast;
}

const getLunch = () =>{
    console.log("Hello, what is your lunch?\n")
    let lunch = prompt.question();
    return lunch;
}

const getDinner = () =>{
    console.log("Hello, what is your dinner?\n")
    let dinner = prompt.question();
    return dinner;
}

// Maths related
const getNumber = () =>{
    console.log("Please input a number")
    let number = Number(prompt.question());
    return number;
}

const add2Numbers = () =>{
    console.log("I am going to ask for 2 numbers from you and I will add them together!");
    let number1 = getNumber();
    let number2 = getNumber();
    let sum = number1 + number2;
    console.log(`I have successfully worked out that ${number1} + ${number2} = ${sum}`);
}

const hoursToMinutes = () => {
    console.log("I am going to ask you for a number of hours and then covert it into minutes!");
    let hours = getNumber();
    let minutes = hours * 60;
    console.log(`I have successfully worked out that ${hours} hours is ${minutes} minutes`)
}

// String manipulation
const getStringLength = (string) =>{
    return string.length;
}

// Final solutions as per the activities
const sayHello = () => {
    let name = getName();
    console.log(`Hello ${name}, its lovely to meet you.`);
};

const sayFavourites = () => {
    let film = getFFilm();
    let age = getAge();
    console.log(`Woah! only ${age}, you look great! I also loved watching ${film}`)
}

const sayMeals = () => {
    let breakfast = getBreakfast();
    let lunch = getLunch();
    let dinner = getDinner();
    console.log(`You ate ${breakfast}, ${lunch} and ` + dinner + ` yesterday?! Thats great!`)
}

const checkCharsInString = () =>{
    console.log("I bet I can tell you how many characters are in any string you give me (Includes spaces)");
    let string = getString();
    let length = getStringLength(string);
    console.log(`I can see that your string "${string}" contains ${length} characters`)
}

const toUpper = (string) =>{
    return string.toUpperCase();
}

const convToUpper = () =>{
    console.log("I'll change your string into capital letters, WATCH!");
    let string = getString();
    let string_upper = toUpper(string);
    console.log(`I have converted your string "${string}" to capital letters: ${string_upper}`)
}

const extractWorld = () =>{
    let string = "Hello World";
    let subString = string.substring(6, 11);
    console.log(`Using .substring(6, 11) I have extracted "${subString}" from "Hello World"`);
}

const roundNumbers = () =>{
    let num = 1.5;
    let rounded_down = Math.floor(num);
    let rounded_nearest = Math.round(num);
    console.log(`I have used Math.Round(1.5) to get a value of: ${rounded_nearest}. \nI have used Math.floor(1.5) to get a value of: ${rounded_down}.`)
}

const randomNumber = () =>{
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`I have generated a number between 1 and 10: ${randomNumber}`);
}


// DAY 2
const starterActivity = () =>{
    // 1.
    let name = getName();

    // 2.
    let film = getFFilm();

    // 3.
    let lesson1 = prompt.question("Tell me a lesson you learned yesterday.");
    let lesson2 = prompt.question("Tell me another lesson you learned yesterday.")

    // 4.
    lesson1 = prompt.question("Tell me a lesson you are learning today.");
    lesson2 = prompt.question("Tell me another lesson you are learning today.");

    //  5.
    add2Numbers();

    // 6.
    let phrase = "The Truth Is Out There";
    let chars = getStringLength(phrase);
    let upper_phrase = toUpper(phrase);

    console.log(`Hello ${name}, I see your favourite film is ${film}! I,m thrilled to hear you are learning ${lesson1} and ${lesson2} today!\n
        The secret message character count: ${chars}\n
        The secret message in upper case: ${upper_phrase}\n`)

}

const filmArray = () =>{
    films = ["Live Die Repeat", "Maleficent", "Wolf of wall street"];

    console.log(`This is the second item in your films array: ${films[1]}`);
}

const arrayManipulation = () =>{
    array = ["x", "Y", "Z", "A", "B", "C"];

    console.log(`Array before using .pop(): ${array}`);
    array.pop();
    console.log(`Array after using .pop(): ${array}`);

    item3 = array[3];
    console.log(`Item in array at index 3 is: ${item3}`);
    console.log(`The length of this array is: ${array.length}`);
}

const fruitBasket = () =>{
    basket = ["apple", "banana", "pear", "orange"];

    // show second item in basket
    console.log(`2nd item in basket: ${basket[1]}`);

    basket.push("grapes");

    basket.shift();

    console.log(`Your basket has ${basket.length} item(s) and grapes are at index: ${basket.indexOf("grapes")}`);

    console.log("I will now loop through each item in your basket!")
    for(let i = 0; i < basket.length; i++){
        console.log(`index ${i}: item ${basket[i]}`);
    }
}

const smileCount = () =>{
    let smiles = 0;

    while(smiles < 10){
        smiles += 1;
        console.log(`Smile number ${smiles}: :)`);
    }
}

const tenToOne = () =>{

    // FOR LOOP
    console.log(`This is counting down from ten to one using a for loop`);

    for(let i = 10; i > 0; i--){
        console.log(`While loop number ${i}`);
    }

    // WHILE LOOP
    console.log(`This is counting down from ten to one using a while loop`);

    let num = 10;

    while(num > 0){
        console.log(`For loop number ${num}`);
        num -= 1;
    }
}

const verifyAge = () =>{
    let age = Number(getAge());

    if(age >= 18){
        console.log("Access Granted!");
    } else{
        console.log("Access Denied!");
    }
}

const oddOrEven = () =>{
    let num = Number(getNumber());
    if((num % 2) == 0){
        console.log("Your number is even!");
    } else if ((num % 2) == 1) {
        console.log("Your number is odd");
    }
}

const fizzBuzz = () =>{
    let num = Number(getNumber());
    let finalString = ""

    if((num % 3) == 0){
        finalString += "Fizz";
    } 

    if ((num % 5) == 0){
        finalString += "Buzz";
    }

    if(!((num % 5) == 0) && !((num % 3) == 0)){
        finalString = String(num);
    }
    
    console.log(finalString);

}

const weekendOrWeekday = () =>{
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = prompt.question("Enter a day and i'll tell you if its a weekday or weekend, must have a capital letter at the start!\n");

    // Check for valid day
    if(days.includes(day)){
        switch(day){
            case "Monday": console.log("Weekday!"); break;
            case "Tuesday": console.log("Weekday!"); break;
            case "Wednesday": console.log("Weekday!"); break;
            case "Thursday": console.log("Weekday!"); break;
            case "Friday": console.log("Weekday!"); break;
            case "Saturday": console.log("Weekend!"); break;
            case "Sunday": console.log("Weekend!"); break;
        }
    } else{
        console.log("Invalid day");
    }

}

const gradeGenerator = () =>{
    let grade = Number(prompt.question("Enter your grade between 0-100 and i'll give you your grade!\n"));

    // Check for valid day
    if((grade >= 0) && (grade <= 100)){
        switch(true){                                                  // NEEDS TO COMPARE WITH BOOLEAN AS CASES EVALUATE TO A BOOL VALUE
            case 90 < grade: console.log("Your Grade is A"); break;
            case 70 < grade: console.log("Your Grade is B"); break;
            case 60 < grade: console.log("Your Grade is C"); break;
            case 50 < grade: console.log("Your Grade is D"); break;
            case 30 < grade: console.log("Your Grade is E"); break;
            case 0 <= grade: console.log("Your Grade is F"); break;
        }
    } else{
        console.log("Invalid grade");
    }

}

const fizzBuzzSwitch = () =>{
    let num = Number(getNumber());
    let finalString = ""

    switch(true){
        case (((num % 3) == 0) && ((num % 5) == 0)): finalString = "FizzBuzz"; break;
        case ((num % 3) == 0): finalString = "Fizz"; break;
        case ((num % 5) == 0): finalString = "Buzz"; break;
        case (!((num % 3) == 0) && !((num % 3) == 0)): finalString = String(num); break;
    }
    
    console.log(finalString);

}

const sumOfArrays = () =>{
    const arr1 =[23,421,2,34,12];
    const arr2 =[3,41,242,314,612];
    const arrays = [arr1, arr2];
    
    let sum = 0;                                           // SUM SHOULD BE 1704

    for(const arr of arrays){
        for(const num of arr){
            sum += num;
        }
    }
    console.log(sum);
}

const evenNumbers = () =>{
    let n = prompt.question("Enter a number and I will output every even number between 1 and that number!\n");
    let numbers = [];
    let start = 2;

    if(n == start){
        console.log(`There are no numbers between 1 and 2 nevermind even ones!`);
    } else{
        for(start ; start < n; start++){
            if((start % 2) == 0){
                numbers.push(start);
            }
        }
        console.log(`There are ${numbers.length} even numbers between 1 and ${n}, these are:\n ${numbers}`);
    }

}

const reverseOrder = () =>{
    const arr =[23,421,2,34,12];
    let end = arr.length;

    for(let i = end ; i >= 0; i--){
        console.log(arr[i]);
    }
}

const sumOfElements = () =>{
    const arr1 =[23,421,2,34,12];
    const arr2 =[3,41,242,314,612];
    const arr_result = [];

    for(let i = 0; i < arr1.length; i++){
        arr_result.push(arr1[i] + arr2[i]);
    }

    console.log(arr_result);
}

// Given any string, change every second letter to "Z" (capital Z). Print the new version.
const letterChange = (orginal_string) =>{
    let result_string = "";

    for(let i = 0; i < orginal_string.length; i++){
        if((i == 0) || ((i % 2) == 0)){
            result_string += "z";
        }else{
            result_string += orginal_string[i];
        }
    }
    console.log(`I have added a z to every 2nd letter of ${orginal_string} to give: ${result_string}`);
    
}

const containsY = (orginal_string) =>{
    orginal_string = orginal_string.toUpperCase();

    if(orginal_string.includes("Y")){
        console.log("yes");
    } else if(!orginal_string.includes("Y")){
        console.log("no");
    }
}

const factorial = () =>{
    let n = prompt.question("Enter a number and I will tell you the factorial sum! \n");
    let sum = 1;

    for(let i=1; i <= n; i++){
        sum *= i;
    }
    console.log(`The factorial sum of ${n} is: \n ${sum}`);
}

const guessThePin = () =>{
    const pin = 1504;
    let attempts = 0;

    console.log("Try to guess my 4 digit pin!")
    for(attempts; attempts < 4; attempts++){
        let pinAttempt = prompt.question("Enter Pin: \n");
        if(pinAttempt == pin){
            console.log("You guess the pin correctly!");
            break;
        } 
    }
    if(attempts == 4){
        console.log("You failed to guess the code! WOMP WOMP");
    }
}

const palindromeChecker = () =>{
    let string = prompt.question("Enter a string and I'll tell you if its a palindrome!:\n");

    start = 0;
    end = string.length -1;

    for(start; start <end; start++){
        if(string[start] != string[end]){
            console.log("Mismatch detected! Your string is not a palindrome!");
            return
        }
        end -=1;
    }

    console.log("Your string is a palindrome!");
}

const summation = () =>{
    let n = prompt.question("Enter a number and I will tell you the sum of every number from 1 to it added together! \n");
    let sum = 0;

    for(let i=1; i <= n; i++){
        sum += i;
    }
    console.log(`The summmation of ${n} is: \n ${sum}`);
}

const helloWorldX5 = () =>{
    let n = 0;
    while(n <5){
        console.log("Hello World!")
        n +=1;
    }
}

const countTo5 = () =>{
    let n = 0;
    while(n <5){
        console.log(n+1);
        n +=1;
    }
}

const letterAX10 = () =>{
    let n = 0;
    while(n <10){
        console.log("A")
        n +=1;
    }
}

const fiveXString = () =>{
    let n = 0;
    strResult = "";
    while(n <5){
        strResult +="X";
        n +=1;
    }
    console.log(strResult);
}

const newLineNumbers = () =>{
    let n = 0;
    while(n <3){
        console.log(n+1);
        n +=1;
    }
}

const countDownFrom3 = () =>{
    let n = 3;
    while(n > 0){
        console.log(n);
        n -=1;
    }
}

const simpleArrIteration = () =>{
    let arr = ["Red", "Green", "Blue"];
    let n = arr.length;
    let i =0;

    while(i < n){
        console.log(arr[i]);
        i += 1;
    }
}

const countDownFrom5NoBlock = () =>{
    let n = 5;
    while(n > 0 && console.log(n), n--);
}

const infiniteLoop = () =>{
    while(true){
        console.log("Looping!");
    }
}

const booleanLoop = () =>{
    let bool = true;
    let i = 1;
    while(bool){
        if(i == 7){bool = false;}
        console.log("Looping!");
        i++;
    }
}

const reverseOrderForOf = () =>{
    const arr =[23,421,2,34,12];
    let end = arr.length;

    for(const item of arr.reverse()){
        console.log(item);
    }
}

const doWhile = (bool) =>{
    do{
        console.log("You will see this message once if false was passed, and repeattedly if true was passed!\n");
    } while(bool);
}

const guessThePinDoWhile = () =>{
    const pin = 1504;
    let attempts = 0;
    let correct = false;

    console.log("Try to guess my 4 digit pin!")
    do{
        let pinAttempt = prompt.question("Enter Pin: \n");
        if(pinAttempt == pin){
            console.log("You guess the pin correctly!");
            correct = true;
        } 
        attempts++;
    } while(attempts < 4 && !correct);

    if(attempts == 4){
        console.log("You failed to guess the code! WOMP WOMP");
    }
}

// Run the solutions

// Day 1
// sayHello();
// sayFavourites();
// sayMeals();
// add2Numbers();
// hoursToMinutes();
// checkCharsInString();
// convToUpper();
// extractWorld();
// roundNumbers();
// randomNumber();

// Day 2
// starterActivity();
// filmArray();
// arrayManipulation();
// fruitBasket();
// smileCount();
// tenToOne();
// verifyAge();
// oddOrEven();
// fizzBuzz();
// weekendOrWeekday();
// gradeGenerator();
// fizzBuzzSwitch();

// Day 2 Loop Challenege Set
// sumOfArrays();
// evenNumbers();
// reverseOrder();
// sumOfElements();
// letterChange("Hello World!");
// containsY("Hello World!");
// containsY("Hello World! You're wonderful!");
// factorial();
// guessThePin();
// palindromeChecker();
// summation();
// helloWorldX5();
// countTo5();
// letterAX10();
// fiveXString();
// newLineNumbers();
// countDownFrom3();
// simpleArrIteration();
// countDownFrom5NoBlock();
// infiniteLoop();
// booleanLoop()
// reverseOrderForOf();
// doWhile(false);
// doWhile(true);
// guessThePinDoWhile();

// Day 3

