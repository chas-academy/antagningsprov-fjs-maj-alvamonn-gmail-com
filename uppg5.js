
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    //Exempeltal
    const nr1 = 10
    const nr2 = 8

    if (nr1 > nr2){
        console.log("Det första talet är större än det andra")
    }
    else if(nr2 > nr1){
        console.log("Det andra talet är större än det första")
    }

    //Här skulle jag, utöver uppgiftens instruktioner, placera en "else" för om talen är lika stora
    //och skriva ut "Talen är lika stora"
}

uppg5()

module.exports = { uppg5 };