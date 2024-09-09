function add(a,b){
   return a+b;
};
function subtract(a,b){
    return a-b;
} ;
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};
function operate(op,num1,num2){
    if (op === "+"){
       return add(num1,num2)
    }
    else if (op === "-"){
       return subtract(num1,num2)
    }
    else if (op === "*"){
        return multiply(num1,num2)
    }
    else if (op === "/"){
        return divide(num1,num2)
    };
};
let firstNum = 0;
let operator = 0;
let secondNum = 0;


let display = document.getElementById("display");
let displayValue = 0;
let numButtons = document.querySelectorAll(".numbers");
const button = document.querySelectorAll("button");
const clearButton = document.getElementById("clear");
const changeButton = document.getElementById("change");
const percentButton = document.getElementById("percent");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const timesButton = document.getElementById("times");
const makesButton = document.getElementById("makes");

//function to show the numbers clicked on the display//
numButtons.forEach(button => {
    button.addEventListener('click', function(){
       let text = display.textContent;
       if (isNaN(text)){
        display.textContent = null
       };
        display.textContent += button.textContent;
        displayValue = display.textContent;
        console.log(displayValue);
    })
   
});

//function to clear the display when AC is clicked//
clearButton.onclick = function(){
    display.textContent = null;
    displayValue = display.textContent;
};

//function to change numbers value from + to - and vise versa//
changeButton.onclick = function(){
    display.textContent = -display.textContent;
    displayValue = display.textContent;
    };

//function to get the number in percent//
percentButton.onclick = function(){
    display.textContent = display.textContent * 0.01;
    displayValue = display.textContent;
};

plusButton.onclick = function(){
    firstNum = parseInt(displayValue);
    operator = "+";
    displayValue = 0;
    display.textContent = plusButton.textContent;

    console.log("firstNumber", firstNum);
    console.log("operator", operator);
    console.log("displayValue", displayValue);
    
};

minusButton.onclick = function(){
    firstNum = parseInt(displayValue);
    operator = "-";
    displayValue = 0;
    display.textContent = minusButton.textContent;

    console.log("firstNumber", firstNum);
    console.log("operator", operator);
    console.log("displayValue", displayValue);
    
};

makesButton.onclick = function(){
    
    secondNum = parseInt(displayValue);
    let result = operate(operator,firstNum,secondNum);
    displayValue = result;
    display.textContent = displayValue;

    console.log("secondNum", secondNum,"firstNum", firstNum,"operator", operator);
    console.log(result);
};

console.log(operate("*",4,2));
console.log(subtract(4,2))