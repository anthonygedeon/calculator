// Variables
const display = document.querySelector("#display-numbers");
const keypad = document.querySelector(".calculator-buttons");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

let number = "";
let operation;

// Event listeners
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', equal);

keypad.addEventListener("click", event => {
    if (event.target.className == "calculator-numbers") {
        number += event.target.innerHTML;
        display.value = number;
    }

    if (event.target.className == "calculator-operators") {
        operation = event.target.innerHTML;
        if (number) {
            total = Number(number);
            number = "";
        }
        display.value = total;
    }
});

// Functions
function clear() {
    total = 0;
    number = '';
    display.value = 0;
}

function equal() {
    if (number && operation) compute(operation);
}

function add(number1, number2) {
    return Number(number1) + Number(number2);
}

function subtract(number1, number2) {
    return Number(number1) - Number(number2);
}

function multiply(number1, number2) {
    return Number(number1) * Number(number2);
}

function divide(number1, number2) {
    return Number(number1) / Number(number2);
}

function operate(operator, number1, number2) {
    return operator(Number(number1), Number(number2));
}

function compute(operation) {
    switch(operation) {

        case "+":
        total = operate(add, number, total);
        display.value = total;
        break;

        case "−": 
        total = operate(subtract, total, number);
        display.value = total;
        break;

        case "×": 
        total = operate(multiply, number, total);
        display.value = total;
        break;

        case "÷": 
        total = operate(divide, total, number);
        display.value = total;
        break;
    }
    number = "";
}