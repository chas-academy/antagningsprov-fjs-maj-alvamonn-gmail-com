

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const people = [
    {
        name: "Harry",
        age: 15
    },
    {
        name: "Ronald",
        age: 15
    },
    {
        name: "Hermione",
        age: 15
    },
    {
        name: "Dumbledore",
        age: 122
    },
    {
        name: "McGonagall",
        age: 62
    }
]

function oldies(array){

    for(let i of array){

         if(i.age > 30){
            console.log(i.name)
        }
    }
}

oldies(people)

}

uppg8()

module.exports = { uppg8 };