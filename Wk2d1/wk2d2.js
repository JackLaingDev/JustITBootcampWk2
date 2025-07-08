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

const convToUpper = () =>{
    console.log("I'll change your string into capital letters, WATCH!");
    let string = getString();
    let string_upper = string.toUpperCase();
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

// Run the solutions
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

