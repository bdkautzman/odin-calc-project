// Global variables
let secondOpFlag = false; // Flags when a calculation is using multip operators
let disp = ''; // Calculator display vlue
let num1 = null, num2 = null, op = ''; // User input numbers and operators

// Backend operation functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        alert("Don't divide by zero, idiot");
    }
    if(num1 === 0 || num2 === 0){
        return NaN;
    }
    return num1/num2;
}

function operate(op, num1, num2){
    switch (op) {
        case '+':
            return add(num1, num2);
        
        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);
    
        default:
            return 'Invalid operator';
    }
}

// Frontend functions
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#displayText');

buttons.forEach((button) => {
    switch (button.textContent) {
        case '/':
        case '*':
        case '-':
        case '+':
            button.addEventListener('click', () => {
                opBtns(button.textContent);
            });
            break;
            
        case 'C':
            button.addEventListener('click', () => {
                clearBtn();
            });
            break;
        
        case '=':
            button.addEventListener('click', () => {
                equalBtn();
            });
            break;

        default:
            button.addEventListener('click', () => {
                numBtns(button.textContent);
            });
            break;
    }

})

function opBtns(sym){
    if(num1 !== null && num2 !== null && op !== ''){
        display.textContent = Math.round(100*operate(op, num1, num2))/100;
        num1 = Number(display.textContent);
        op = sym;
        num2 = null;
        secondOpFlag = true;
    }
    else{
        display.textContent = '';
        op = sym;
    }
}

function numBtns(sym){
    if(num1 === null || secondOpFlag){
        display.textContent = '';
        secondOpFlag = false;
    }

    display.textContent += sym;

    if(op === ''){
        num1 = Number(display.textContent);
    }else{
        num2 = Number(display.textContent);
    }
}

function clearBtn(){
    num1 = null;
    op = '';
    num2 = null;
    display.textContent = '';
}

function equalBtn(){
    if(num1 !== null && num2 !== null && op !== ''){
        display.textContent = Math.round(100*operate(op, num1, num2))/100;
        num1 = null;
        op = '';
        num2 = null;
    }
}