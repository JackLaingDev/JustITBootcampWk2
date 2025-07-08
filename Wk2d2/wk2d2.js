const prompt = require("readline-sync")

// THIS FILE IS PURELY FOR WORKING THROUGH BOOTCAMP ACTIVITIES
// Questions
const getName = () =>{
    console.log("Hello, what is your name?\n")
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
