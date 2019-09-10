/****************************
        Variables
*****************************/
var listNumbers = '';

var patterns = {
        operators: /÷×−+=/,
}

/****************************
        Functions
*****************************/
var createNumbers = function(event) {
        var number = event.target.textContent; 

        for (var i = 0; i <= 0; i++) {
                listNumbers += number;
        }

        return listNumbers;
}       

var displayNumbers = function() {
        return display = parseInt(document.querySelector('#display-numbers').value = createNumbers(event));
}

var addition = function(number1, number2) {
        var number1 = display;
        return number1 + number2;
}


/****************************
        Event Listeners
*****************************/
document.addEventListener('click', function(event) {
        if (event.target.className === 'calculator-numbers') {
                displayNumbers();
        }

        if (event.target.className === 'calculator-operators') {
                
        }
});
