

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(array){

        for(let i of array){
            if (i % 2 !== 1){ //om resten av talet dividerat med 2 inte är 1
                console.log(i, "jämnt")
            }
            else{ //resten skulle isf bli 1
                console.log(i, "udda")
            }
        }
    }

    let numbers = [20, 41, 2, 32, 71, 93,] //lägger till en array med nummer

    sort(numbers)
  
}

uppg9()

module.exports = { uppg9 };