/****************************
        Variables
*****************************/
var previousValue, newValue, operator, result, calculator;

previousValue = '';
newValue = '';
operator = '';
result = '';

/****************************
        Functions
*****************************/
var createNumbers = function(event) {
        var number = event.target.textContent; 
        newValue += number;
        return newValue;
}       

var displayNumbers = function() {
        return displayNum1 = parseInt(document.querySelector('#display-numbers').value = createNumbers(event));
}

var addition = function(number1, number2) {
        return number1 + number2;
}

var subtract = function(number1, number2) {
        return number1 - number2;
}

var multiply = function(number1, number2) {
        return number1 * number2;
}

var divide = function(number1, number2) {
        return (number2 != 0) ? number1 / number2 : alert('hello') // Reset calculator and display: 'Don\'t divide by 0';
}

var operate = function() {
        
}

/****************************
        Event Listeners
*****************************/
document.addEventListener('click', function(event) {
        if (event.target.className === 'calculator-numbers') {
                displayNumbers();
        }

        if (event.target.className === 'calculator-operators') {
                previousValue = newValue;
                newValue = '';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                document.querySelector('#display-numbers').value = newValue;
        }

});
