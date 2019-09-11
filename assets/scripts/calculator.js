/****************************
        Variables
*****************************/
var previousValue, newValue, operator, result, calculator;

newValue = '';
/****************************
        Functions
*****************************/
var allClear = function() {
        previousValue = '';
        newValue = '';
        operator = '';
        result = '';
        document.querySelector('#display-numbers').value = 0;
}

var createNumbers = function(event) {
        var number = event.target.textContent; 
        newValue += number;
        return newValue;
}       

var displayNumbers = function() {
        return display = parseInt(document.querySelector('#display-numbers').value = createNumbers(event));
}

var calculatorOperators = function() {
        /*
        if sign has length 1 then
        operator buttons disabled
        until equal button is pressed
        */

        console.log(operator)


}

var switchValue = function() {
        previousValue = newValue;
        newValue = '';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        document.querySelector('#display-numbers').value = newValue;
}

/****************************
        Operator Functions
*****************************/
var addition = function(number1, number2) {
        return parseInt(number1) + parseInt(number2);
}

var subtract = function(number1, number2) {
        return parseInt(number1) - parseInt(number2);
}

var multiply = function(number1, number2) {
        return parseInt(number1) * parseInt(number2);
}

var divide = function(number1, number2) {
        return (parseInt(number2) != 0) ? parseInt(number1) / parseInt(number2) : alert('Nice Try') // Reset calculator and display: 'Don\'t divide by 0';
}

/****************************
        Result Function
*****************************/
var operate = function(number1, sign, number2) {
        
        switch(operator) {
                case '÷':
                var divide = divide(previousValue, newValue);
                document.querySelector('#display-numbers').value = divide;
                break;

                case '×':
                var multiply = multiply(previousValue, newValue);
                document.querySelector('#display-numbers').value = multiply
                break;

                case '−':
                var substract = subtract(previousValue, newValue);
                document.querySelector('#display-numbers').value = substract
                break;

                case '+':
                var add = addition(previousValue, newValue);
                document.querySelector('#display-numbers').value = add
                break;
        }
        
}

/****************************
        Event Listeners
*****************************/
document.querySelector('#clear').addEventListener('click', allClear);
document.querySelector('#equal').addEventListener('click', operate);

document.addEventListener('click', function(event) {
        if (event.target.className === 'calculator-numbers') {
                displayNumbers();
        }

        if (event.target.className === 'calculator-operators') {
                switchValue();
                calculatorOperators();
                operator = event.target.textContent;
        }
});



