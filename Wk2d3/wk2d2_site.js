// Variables setup
let one =               document.getElementById("one");
let two =               document.getElementById("two");
let three =             document.getElementById("three");
let four =              document.getElementById("four");
let five =              document.getElementById("five");
let six =               document.getElementById("six");
let seven =             document.getElementById("seven");
let eight =             document.getElementById("eight");
let nine =              document.getElementById("nine");
let zero =              document.getElementById("zero");
let plus =              document.getElementById("plus");
let minus =             document.getElementById("minus");
let multiply =          document.getElementById("multiply");
let divide =            document.getElementById("divide");
let decimal =           document.getElementById("decimal");
let equation =          document.getElementById("equation_text");
let calculator =        document.getElementById("calculator");
let equals =            document.getElementById("equals");
let history =           document.getElementById("equationHistory");
let openBracket =       document.getElementById("openBracket");
let closedBracket =     document.getElementById("closedBracket");

// This is needed to allow for each click to concatenate the pressed digit onto the end
// of the equation that is currently showing, stops it being wiped each time.
let current_text = "";                                                                    
let numbers = [];
let current = "";
let holder_number = "";
let chosen_symbol = "";
let symbolPressed = false;
let numberPressed = false;
let equalsPressed = false;
let result = 0;
let prevEquations = [];

// Utility
let symbols = ["+", "-", "*", "/", "(", ")"];
let integers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Each onClick method for each button, adding a digit to the current_equation
const oneClick = () =>      {current_text = current_text + "1"; current = "1"; pressButtonAnim(one)};
const twoClick = () =>      {current_text = current_text + "2"; current = "2"; pressButtonAnim(two);}
const threeClick = () =>    {current_text = current_text + "3"; current = "3"; pressButtonAnim(three);}
const fourClick = () =>     {current_text = current_text + "4"; current = "4"; pressButtonAnim(four);}
const fiveClick = () =>     {current_text = current_text + "5"; current = "5"; pressButtonAnim(five);}
const sixClick = () =>      {current_text = current_text + "6"; current = "6"; pressButtonAnim(six);}
const sevenClick = () =>    {current_text = current_text + "7"; current = "7"; pressButtonAnim(seven);}
const eightClick = () =>    {current_text = current_text + "8"; current = "8"; pressButtonAnim(eight);}
const nineClick = () =>     {current_text = current_text + "9"; current = "9"; pressButtonAnim(nine);}
const zeroClick = () =>     {current_text = current_text + "0"; current = "0"; pressButtonAnim(zero);}
const plusClick = () =>     {current_text = current_text + "+"; current = "+"; pressButtonAnim(plus);}
const minusClick = () =>    {current_text = current_text + "-"; current = "-"; pressButtonAnim(minus);}
const multiplyClick = () => {current_text = current_text + "*"; current = "*"; pressButtonAnim(multiply);}
const divideClick = () =>   {current_text = current_text + "/"; current = "/"; pressButtonAnim(divide);}
const oBracketClick = () => {current_text = current_text + "("; current = "("; pressButtonAnim(openBracket);}
const cBracketClick = () => {current_text = current_text + ")"; current = ")"; pressButtonAnim(closedBracket);}
// const decimalClick = () =>  {current_equation = current_equation + "."; current = ".";}  // CURRENTLY DISABLED, GOING TO BE ADDED SOON

//THERE ARE 2 EQUALS FUNCTIONS, THE FIRST IS A CUSTOM MADE EVAL() FUNC, THE SECOND USES EVAL TO GET THE CALC WORKIGN FULLY DURING DEVELOPMENT
const equalsClickCustom = () =>{

    // Add second number
    numbers.push(holder_number)
    pressButtonAnim(equals);


    // process the equation
    if(numbers.length < 1){
        alert("You must enter 2 numbers and 1 symbol before pressing equals");
    } else if(!equalsPressed){

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);
        console.log(`equalsClick: num1: ${num1}\nnum2:${num2}\nchosen_symbol:${chosen_symbol}`);

        // Process chosen symbol
        switch(chosen_symbol){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "*":
                result = num1 * num2;
                break;

        }

        // Set current_text displaying to the result
        current_text = String(result);
        equation.innerHTML = current_text;

        // Get equation in readable form
        let equationFinal = `${num1}${chosen_symbol}${num2}=${result}`;

        // Add equation to prevEquations to keep a programmable history
        prevEquations.push(equationFinal);

        // Update history
        updateHistory(equationFinal);

        // Need to clear previous numbers and add answer as first number
        numbers.length = 0;
        holder_number = "";                     // NEED TO AVOID PREVIOUS SECOND NUMBER BEING STRING CONCATENATED TO NEXT NUMBER
        numbers.push(Number(current_text))

        // Need to set symbolPressed to false so that the user can manipulate the result
        symbolPressed = false;

        equalsPressed = true;
    } else if(equalsPressed){
        reset();
    }

}

const equalsClickEval = () =>{

    // Play animations
    pressButtonAnim(equals);


    // process the equation
    if(numbers.length < 1){
        alert("You must enter 2 numbers and 1 symbol before pressing equals");
    } else if(!equalsPressed){

        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[1]);

        // Dev testing ONLY
        console.log(`equalsClick: num1: ${num1}\nnum2:${num2}\nchosen_symbol:${chosen_symbol}`);

        // Use eval() to get result
        let result = eval(current_text);
        let original_equation = current_text;

        // Set current_text displaying to the result
        current_text = String(result);
        equation.innerHTML = current_text;

        // Get equation in readable form
        let equationFinal = `${original_equation}=${result}`;

        // Add equation to prevEquations to keep a programmable history
        prevEquations.push(equationFinal);

        // Update history
        updateHistory(equationFinal);

        // Need to clear previous numbers and add answer as first number
        numbers.length = 0;
        holder_number = "";                     // NEED TO AVOID PREVIOUS SECOND NUMBER BEING STRING CONCATENATED TO NEXT NUMBER
        numbers.push(Number(current_text));

        equalsPressed = true;
    } else if(equalsPressed){
        reset();
    }

}

const pressButtonAnim = (elem) =>{
    elem.classList.add("calcButtonPressed"); 

    setTimeout(() => {
        elem.classList.remove("calcButtonPressed")
    }, 100);
}

// Reset function to use after a completed calculation
const reset = () =>{
    current_text = "";                                                                    
    numbers.length = 0;
    current = "";
    holder_number = "";
    chosen_symbol = "";
    symbolPressed = false;
    numberPressed = false;
    equalsPressed = false;
    result = 0;
    current_text = "";
    equation.innerHTML = current_text;
}



// Handle integer in equation
const isInteger = (x) =>{
    let isInteger = false;
    
    if(integers.includes(x)){isInteger = true;};

    return isInteger;
}

const handleInteger = (int) =>{
    if(!equalsPressed) {                                                  // NEEDED TO PREVENT USER ADDING A DIGIT TO PREV RESULT
        holder_number = holder_number + int;
        numberPressed = true;
        equation.innerHTML = current_text;
    } // if equals is pressed od not add anything to holder number etc
}

// Handle symbol in equation
const isSymbol = (x) =>{
    let isSymbol = false;
    
    if(symbols.includes(x)){isSymbol = true;};

    return isSymbol;
}


const handleSymbol= (symbol) =>{
    let isBracket = ["(", ")"].includes(symbol);
    // Store holder_number  in numbers as int when a symbol is pressed as u know thats the end of the number
    // Cant process if symbol has already been pressed once as model currently only supports one symbol
    if(numberPressed || isBracket){

        // If equals is pressed, then there MUST be a number already there (previous result) so no need to add it to numbers
        if(equalsPressed){
            chosen_symbol = symbol;
            equalsPressed = false;
            equation.innerHTML = current_text;

            // Testing purpose Only
            let num1 = Number(numbers[0]);
            let num2 = Number(numbers[1]);
            console.log(`handleSymbol: num1: ${num1}\nnum2:${num2}\nchosen_symbol:${chosen_symbol}`);
        }else if(!equalsPressed){
            numbers.push(Number(holder_number));
            holder_number = "";                                                                      // RESET AFTER A SYMBOL IS PRESSED TO GET THE NEXT NUMBER
            
            if(!isBracket){symbolPressed = true; chosen_symbol = symbol;}
            
            equation.innerHTML = current_text;
        }

    } else if(!numberPressed){
        alert("You cannot press a symbol before a number!");
        current_text = "";                                                                           // NEED TO ERASE INCORRECTLY ADDED DIGIT TO EQUATION BY ONCLCIK METHODS
    } else if(symbolPressed && !equalsPressed){
        alert("We currently do not support equations with more than one symbol!")
        current_text = "";                                                                           // NEED TO ERASE INCORRECTLY ADDED DIGIT TO EQUATION BY ONCLCIK METHODS
    }      
}

const updateHistory = (equation) =>{
    const newItem = document.createElement('p');

    newItem.innerHTML = equation;
    history.appendChild(newItem);
}

// Main
if(calculator){

    // Listens for a click event and allows us to use the event object to find the "event.target.closest('.gridItem') part"
    calculator.addEventListener('click', (event) =>{

        // Gets the Id of the first ancestor to have .gridItem in its classlist
        // Necessary because this way the user can either click the contents or the actual element!
        const clickedElement = event.target.closest('.gridItem');

        if(clickedElement){

            // Gets the Id of the clicked element
            const id = clickedElement.id;
            switch(id){
                case "one":            oneClick(); break;
                case "two":            twoClick(); break;
                case "three":          threeClick(); break;
                case "four":           fourClick(); break;
                case "five":           fiveClick(); break;
                case "six":            sixClick(); break;
                case "seven":          sevenClick(); break;
                case "eight":          eightClick(); break;
                case "nine":           nineClick(); break;
                case "zero":           zeroClick(); break;
                case "plus":           plusClick(); break;
                case "minus":          minusClick(); break;
                case "divide":         divideClick(); break;
                case "multiply":       multiplyClick(); break;
                case "decimal":        decimalClick(); break;
                case "equals":         equalsClickEval(); break;                  // Use equalsClickCustom() to use my OWN eval() method
                case "openBracket":    oBracketClick(); break;
                case "closedBracket":  cBracketClick(); break;
            }


            // Required to easily process the equation
            if(isInteger(current)){handleInteger(current);} 
            else if (isSymbol(current)){ handleSymbol(current);}


        }
    })
} else{
    alert("Calculator failed to load.")
}

