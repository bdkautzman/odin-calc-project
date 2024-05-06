// Backend functions
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
    if(num1 === 0 || num2 === 0){
        return NaN;
    }
    return num1/num2;
}

let num1 = '', num2 = '', op = '';

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


let disp = ''; // Calculator display

// Frontend functions
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

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
    display.textContent = '';
    op = sym;
}

function numBtns(sym){
    if(op === ''){
        num1 += sym;
        display.textContent += sym;
    }else{
        num2 += sym;
        display.textContent += sym;
    }
}

function clearBtn(){
    num1 = 0;
    op = '';
    num2 = 0;
    display.textContent = '';
}

function equalBtn(){
    if(num1 !== '' && num2 !== '' && op !== ''){
        display.textContent = operate(op, num1, num2);
    }
}