/****************************
        Variables
*****************************/
var listNumbers = ''

/****************************
        Functions
*****************************/

var createNumbers = function(event) {
        var number = event.target.textContent; 

        
        
        console.table(listNumbers)
}       

var displayNumbers = function() {

}

/****************************
        Event Listeners
*****************************/
document.addEventListener('click', function(event) {
        if (event.target.className === 'calculator-numbers') {
                createNumbers(event);
        }
});
