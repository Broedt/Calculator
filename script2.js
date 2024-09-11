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
 let firstNum = "";
 let operator = 0;
 let secondNum = "";
 let result = 0;
 

const numButtons = document.querySelectorAll(".numbers");
const button = document.querySelectorAll("button");
const opButtons = document.querySelectorAll(".operators")
const display = document.getElementById("display");
const makesButton = document.getElementById("makes");
const percentButton = document.getElementById("percent");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");



numButtons.forEach(button => {
    button.addEventListener('click', function(){
        let input = button.textContent;
        if (display.textContent == operator){
            display.textContent = "";
        };
            
            if(operator == 0){
            firstNum += input;
            display.textContent = firstNum;
            
            }
            ;
            if(operator !== 0){
            secondNum += input;
            display.textContent += input;
            }
            ;
            
        
    })
})
;

makesButton.addEventListener('click',function(){
   
    let result = operate(operator,parseFloat(firstNum),parseFloat(secondNum));
    firstNum = result;
    display.textContent = result;
    secondNum = "";
});


opButtons.forEach(button=>{
    button.addEventListener('click', function(){
        
    
        if (secondNum != 0){
            firstNum = operate(operator,parseFloat(firstNum),parseFloat(secondNum));
            
            display.textContent = firstNum;
            secondNum = "";
        }
        operator = button.textContent;
        display.textContent = operator;
        

        console.log("operator",operator,"firstNum", firstNum);
        
    })
})
;

percentButton.addEventListener('click', function(){
    display.textContent = display.textContent *0.01;
    firstNum = display.textContent;
});

clearButton.addEventListener('click', function(){
    location.reload()
});

deleteButton.addEventListener('click', function(){
    let delNum = display.textContent
    firstNum = delNum.slice(0, -1);
    display.textContent = firstNum;
    console.log(delNum.slice(0, -1));
});




console.log(firstNum);



    
