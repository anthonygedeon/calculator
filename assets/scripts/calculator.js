/*
 * Anthony Gedeon
 * 07/17/19
 * Calculator
 */

// Variables
const display = document.querySelector("#display-numbers");
const keypad = document.querySelector(".calculator-buttons");

const numbers = [];

// Event listeners
keypad.addEventListener("click", event => {
    if (event.target.tagName == "BUTTON") {
        numbers.push(event.target.textContent)
        let ints = numbers.map(parseFloat);
        display.value = numbers.join("");
        add(ints)
    }
});

// Functions
function clear() {
    
}

function plusOrNegative() {

}

function percentage() {

}

function add(number) {
    const total = number.reduce( (accumulator, currentValue) => accumulator + currentValue);
    console.log(total)
}

function subtract(number1, number2) {

}

function multiply(number1, number2) {

}

function divide(number1, number2) {

}

function operate(operator, number1, number2) {

}

function decimal() {

}