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
        }
        switch (true){
            case firstNum == "":
                displayValue += pressedButton;
                updateDisplay(displayValue);
                break;
            case firstNum !== "":
                secondNum += pressedButton;
                displayValue = secondNum;
                updateDisplay(displayValue);
                break;
                
        }
            

        console.log("numButton","op",operator,"first",firstNum,"sec",secondNum,"res",result,"dis",displayValue);
    });
    
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
        switch (true){
            case secondNum == "":
                firstNum = displayValue;
                operator = pressedButton
                displayValue = firstNum+operator;
                updateDisplay(displayValue);
                break;
            case secondNum !== "":
                result = operate(operator,parseFloat(firstNum),parseFloat(secondNum));
                firstNum = result;
                operator = pressedButton;
                secondNum = "";
                displayValue = firstNum+operator;
                updateDisplay(displayValue);
                break;
                
         }
        
       
        console.log("opButton","op",operator,"first",firstNum,"sec",secondNum,"res",result,"dis",displayValue);
    })
});

makesButton.addEventListener('click', function(){
    result = operate(operator,parseFloat(firstNum),parseFloat(secondNum));
    firstNum = result;
    secondNum = "";
    operator = 0;
    displayValue = result;
    updateDisplay(displayValue);
    console.log("opButton","op",operator,"first",firstNum,"sec",secondNum,"res",result,"dis",displayValue);
});

clearButton.addEventListener('click', function(){
    location.reload();
});

delButton.addEventListener('click', function(){
    
    let delNum = displayValue.slice(0,-1);
    displayValue = delNum;
    if(secondNum !== ""){
        secondNum = delNum;
    }
    updateDisplay(displayValue);
    console.log("numButton","op",operator,"first",firstNum,"sec",secondNum,"res",result,"dis",displayValue);
});
