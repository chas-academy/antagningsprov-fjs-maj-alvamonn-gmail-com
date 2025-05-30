

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

    function addNumbers(nr1, nr2) {
        let sum = nr1 + nr2
        return sum
    }

    return addNumbers(5, 10) //Kallar jag på funktionen i en return statement
}
 
console.log(uppg7())

module.exports = { uppg7 };