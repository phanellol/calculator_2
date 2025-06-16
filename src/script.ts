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

function operate(numberOne: number, numberTwo: number) {
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
main?.appendChild(input);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
main?.appendChild(buttonContainer);

const valueArray = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"]

for (let i = 0; i < valueArray.length; i++) {
    const numButton = document.createElement("button");
    numButton.classList.add("numButton");
    numButton.classList.add(valueArray[i]);
    numButton.textContent = valueArray[i];
    buttonContainer.appendChild(numButton);
}

let secondInputValue = "";

const allButtons = document.querySelectorAll(".numButton");

allButtons.forEach(button => {
    if (!isNaN(Number(button.textContent))) {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            input.value += buttonValue;
            if (!operator) {
                numberOne = parseInt(input.value);
            } else {
                secondInputValue += buttonValue;
                input.value = numberOne + operator + secondInputValue;
                numberTwo = parseInt(secondInputValue);
            }
        })
    } else if (button.textContent === "+") {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            input.value += buttonValue;
            operator = "+";
        })
    } else if (button.textContent === "-") {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            input.value += buttonValue;
            operator = "-";
        })
    } else if (button.textContent === "*") {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            input.value += buttonValue;
            operator = "*";
        })
    } else if (button.textContent === "/") {
        button.addEventListener("click", () => {
            let buttonValue = button.textContent;
            input.value += buttonValue;
            operator = "/";
        })
    } else if (button.textContent === "=") {
        button.addEventListener("click", () => {
            if (numberOne === undefined || numberTwo === undefined) {
                alert("Wrong!");
                return;
            } else {
                let result = operate(numberOne, numberTwo);
                input.value = result?.toString() || "Error";
            }
        })

    } else if (button.textContent === "C") {
        button.addEventListener("click", () => {
            numberOne = 0;
            numberTwo = 0;
            input.value = "";
            operator = "";
        })
    }
});
