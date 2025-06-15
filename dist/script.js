"use strict";
function add(x, y) {
    let result = x + y;
    return result;
}
function subtract(x, y) {
    let result = x - y;
    return result;
}
function multiply(x, y) {
    let result = x * y;
    return result;
}
function divide(x, y) {
    let result = x / y;
    return result;
}
let numberOne;
let numberTwo;
let operator;
function operate() {
    switch (operator) {
        case "+":
            add(numberOne, numberTwo);
            break;
        case "-":
            subtract(numberOne, numberTwo);
            break;
        case "*":
            multiply(numberOne, numberTwo);
            break;
        case "/":
            divide(numberOne, numberTwo);
            break;
        default:
            alert("Wrong operator!");
    }
}
const main = document.querySelector("#main");
console.log(main);
