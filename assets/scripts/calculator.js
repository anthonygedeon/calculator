/*
 * Anthony Gedeon
 * 07/9/19
 * Calculator
 */

// variables
const keypad = document.querySelector(".calculator-buttons");
const display = document.querySelector("#display-numbers");

// Functions
keypad.addEventListener("click", event => {
    let number = event.target.textContent;
    let tag = event.target.tagName;
    if (tag == "BUTTON") {
        
        
    }
});

function add(number1, number2) {
    number1 + number2;
}

function subtract(number1, number2) {
    number1 - number2;
}

function mulitply(number1, number2) {
    number1 * number2;
}   

function divide(number1, number2) {
    number1 / number2;
}

function operate() {

}