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
    if (y === 0) {
        alert("You cant did it, smarty");
        return;
    }
    let result = x / y;
    return result;
}
let numberOne = undefined;
let numberTwo = undefined;
let operator = undefined;
let newStartPoint = false;
function operate(numberOne, numberTwo) {
    newStartPoint = true;
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
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
const valueArray = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"];
const opArray = ["+", "-", "*", "/"];
for (let i = 0; i < valueArray.length; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("numButton");
    numButton.classList.add(valueArray[i]);
    numButton.textContent = valueArray[i];
    buttonContainer.appendChild(numButton);
}
// 
let secondInputValue = "";
const allButtons = document.querySelectorAll(".numButton");
allButtons.forEach(button => {
    const buttonText = button.textContent;
    if (buttonText === null)
        return;
    if (!isNaN(Number(buttonText))) {
        button.addEventListener("click", () => {
            input.value += buttonText;
            if (operator) {
                secondInputValue += buttonText;
                input.value = numberOne + operator + secondInputValue;
                numberTwo = parseInt(secondInputValue);
            }
            else if (newStartPoint) {
                input.value = buttonText;
                newStartPoint = false;
            }
            else
                return "Wrong be";
        });
    }
    else if (opArray.includes(buttonText)) {
        button.addEventListener("click", () => {
            if (!operator) {
                numberOne = parseInt(input.value);
                operator = buttonText;
                input.value += operator;
            }
            else if (operator) {
                if (numberTwo !== undefined) {
                    let result = operate(numberOne, numberTwo);
                    if (result !== undefined && result !== null) {
                        operator = buttonText;
                        secondInputValue = "";
                        numberOne = result;
                        numberTwo = undefined;
                        input.value = numberOne + operator;
                    }
                }
                else {
                    operator = buttonText;
                    return input.value = numberOne + operator;
                }
            }
            else
                return "Wrong sh";
        });
    }
    else if (buttonText === "=") {
        button.addEventListener("click", () => {
            if (numberOne === undefined || numberTwo === undefined || !operator) {
                alert("Wrong!");
                return;
            }
            else {
                let result = operate(numberOne, numberTwo);
                if (result !== undefined && result !== null) {
                    secondInputValue = "";
                    operator = undefined;
                    numberOne = undefined;
                    numberTwo = undefined;
                    return input.value = result.toString();
                }
            }
        });
    }
    else if (buttonText === "C") {
        button.addEventListener("click", () => {
            numberOne = undefined;
            numberTwo = undefined;
            input.value = "";
            operator = undefined;
            newStartPoint = false;
            secondInputValue = "";
        });
    }
});
