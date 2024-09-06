function add(a,b){
   return a+b;
}
console.log(add(4,2));

function subtract(a,b){
    return a-b;
} 
console.log(subtract(4,2));

function multiply(a,b){
    return a*b;
}
console.log(multiply(4,2));

function divide(a,b){
    return a/b;
}
console.log(divide(4,2));

let firstNum
let operator
let secondNum

function operate(operator,num1,num2){
    if (operator === "+"){
       return add(num1,num2)
    }
    else if (operator === "-"){
       return subtract(num1,num2)
    }
    else if (operator === "*"){
        return multiply(num1,num2)
    }
    else if (operator === "/"){
        return divide(num1,num2)
    };
}
console.log(operate("+",4,2))
console.log(operate("-",4,2))
console.log(operate("*",4,2))
console.log(operate("/",4,2))