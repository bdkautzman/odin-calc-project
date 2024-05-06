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

console.log(add(1,2));
console.log(add(-2,500));
console.log(add(6,-6));

console.log(subtract(-1,-2));
console.log(subtract(10,-10));
console.log(subtract(10,1));

console.log(multiply(5,10));
console.log(multiply(-5,-2));
console.log(multiply(6, 0));
console.log(multiply(2.3, 3.6));

console.log(divide(10, 2));
console.log(divide(1, 0));
console.log(divide(0, 100));
console.log(divide(123234, 34));