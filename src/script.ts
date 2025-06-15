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
console.log(main);
