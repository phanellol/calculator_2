function add(x: number, y: number) {
    let result = x + y;
    return result
}

function subtract(x: number, y: number) {
    let result = x - y;
    return result
}

function multiply(x: number, y: number) {
    let result = x * y;
    return result
}

function divide(x: number, y: number) {
    let result = x / y;
    return result
}

let numberOne: number;
let numberTwo: number;
let operator: string;

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
main?.appendChild(input);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
main?.appendChild(buttonContainer);

const valueArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "=", "c"]

for (let i = 0; i < valueArray.length; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("numButton");
    numButton.textContent = valueArray[i];
    buttonContainer.appendChild(numButton);
}