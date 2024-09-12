function add(a,b){
    let result = (a+b);
    return Math.round(result*100)/100;
 };
 function subtract(a,b){
     let result = a-b;
     return Math.round(result*100)/100;
 } ;
 function multiply(a,b){
     let result = a*b;
     return Math.round(result*100)/100;
 };
 function divide(a,b){
     let result = a/b;
     return Math.round(result*100)/100;
 };
 function operate(op,num1,num2){
     if (op === "+"){
        return add(num1,num2)
     }
     else if (op === "-"){
        return subtract(num1,num2)
     }
     else if (op === "X"){
         return multiply(num1,num2)
     }
     else if (op === "/"){
         return divide(num1,num2)
     };
 };

 const display = document.getElementById("display");
 const numButtons = document.querySelectorAll(".numbers");
 const opButtons = document.querySelectorAll(".operators");
 const makesButton = document.getElementById("makes");
 const clearButton = document.getElementById("clear");
 const dotButton = document.getElementById("dot");
 const delButton = document.getElementById("delete");
 const percentButton = document.getElementById("percent");

 let displayValue = "";
 let operator = 0;
 let firstNum = "";
 let secondNum = "";
 let result = 0;

 function updateDisplay(input){
    display.textContent = input;
 };

 numButtons.forEach(button => {
    button.addEventListener('click', function(){
        let pressedButton = button.textContent;
        let divNum = displayValue.length;
        if (divNum > 10){
            displayValue = displayValue.slice(0,-1);
            updateDisplay(displayValue);
        };
        if ( firstNum !== ""){
            displayValue = "";
            displayValue += pressedButton;
            secondNum = displayValue;
            updateDisplay(secondNum);
        }
        else
        displayValue += pressedButton;
        updateDisplay(displayValue);
    })
    
});

dotButton.addEventListener('click', function(){
    if(displayValue.includes('.')){
        dotButton.textContent = "";
    }
})

opButtons.forEach(button => {
    button.addEventListener('click',function(){
        let pressedButton = button.textContent;
        if (operator == 0){
            firstNum = displayValue;
            displayValue = "";
            secondNum = "";
            operator = pressedButton;
            updateDisplay(operator);
        }
        else if( result !== 0){
            displayValue = "";
            secondNum = "";
            firstNum = result;
            result = 0;
        }
        
        else 
        firstNum = operate(operator, parseFloat(firstNum),parseFloat(secondNum));
        operator = pressedButton;
        updateDisplay(operator);
       
        
    })
});

makesButton.addEventListener('click', function(){
    let message = 0;
    switch(true){
        case (operator == "/" && firstNum == 0 && secondNum == 0):
            message = "ask siri";
            updateDisplay(message);
            break;
        case (operator == "/" && secondNum == 0):
            message = "divide yourself by 0";
            updateDisplay(message);
            break;
        case (operator == 0 || firstNum == "" || secondNum == ""):
            message = "smth´s missing";
            updateDisplay(message);
            break;
            default:
            result = operate(operator, parseFloat(firstNum),parseFloat(secondNum));
            firstNum = result;
            updateDisplay(result);
    }

});

clearButton.addEventListener('click', function(){
    location.reload();
});

delButton.addEventListener('click', function(){
    let delNum = displayValue.slice(0,-1);
    displayValue = delNum;
    updateDisplay(displayValue);
});

percentButton.addEventListener('click',function(){
    let perNumber = displayValue * 0.01;
    displayValue = perNumber;
    updateDisplay(displayValue);
})
