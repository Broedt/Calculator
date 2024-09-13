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
            displayValue += pressedButton;
            secondNum = displayValue;
            updateDisplay(secondNum);
        }
        
        else
        displayValue += pressedButton;
        updateDisplay(displayValue);
    })
    console.log("sec",secondNum);
});


dotButton.addEventListener('click', function(){
    if(displayValue.includes('.')){
            dotButton.textContent = "";
    }
    
    
});
percentButton.addEventListener('click',function(){
    let perNumber = displayValue * 0.01;
    displayValue = perNumber;
    if (secondNum !== ""){
        secondNum = displayValue
    };
    
    updateDisplay(displayValue);
});

opButtons.forEach(button => {
    button.addEventListener('click',function(){
        let pressedButton = button.textContent;
        dotButton.textContent = ".";
        switch(true){
            case result == firstNum && operator !== 0:
                operator = 0;
                displayValue += pressedButton;
                secondNum = displayValue;
                firstNum = operate(operator, parseFloat(firstNum),parseFloat(secondNum));
                updateDisplay(firstNum);
                displayValue = "";
                secondNum = "";
                break;
            case result !== 0:
                firstNum = result;
                operator = pressedButton;
                displayValue = "";
                break;
            case operator == 0:
                firstNum = displayValue;
                operator = pressedButton;
                displayValue = "";
                break;
            case operator !== 0:
                displayValue = operate(operator, parseFloat(firstNum),parseFloat(secondNum));
                firstNum = displayValue;
                displayValue = "";
                break;
        }
    
        updateDisplay(firstNum+operator);
       
        console.log("op",operator,"first",firstNum,"sec",secondNum);
    })
});

makesButton.addEventListener('click', function(){
    let message = 0;
    displayValue = "";
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
            operator = 0;
            secondNum = "";
            updateDisplay(result);
            console.log("res",result,"first",firstNum,"sec",secondNum);
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


