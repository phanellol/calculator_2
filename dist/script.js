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
const input = document.createElement("input");
input.id = "userInput";
input.placeholder = "0";
input.readOnly = true;
main === null || main === void 0 ? void 0 : main.appendChild(input);
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
main === null || main === void 0 ? void 0 : main.appendChild(buttonContainer);
const valueArray = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "С", "0", "=", "/"];
for (let i = 0; i < valueArray.length; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("numButton");
    numButton.classList.add(valueArray[i]);
    numButton.textContent = valueArray[i];
    buttonContainer.appendChild(numButton);
}
let firstInputValue;
const allButtons = document.querySelectorAll(".numButton");
allButtons.forEach(button => {
    if (!isNaN(Number(button.textContent))) {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            firstInputValue = input.value + buttonValue;
            input.value = firstInputValue;
        });
    }
});
