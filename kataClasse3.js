//controllo l'ultimo carattere della stringa, se non è un numero, aggiungo 1
//se è un numero invece ciclo fino a trovare un NaN, a quel punto tengo l'indice, taglio la substring (da index + 1)
//parso la substring e incremeento il valore di uno.

function incrementString(string) {
    let lastChar = string[string.length - 1];
    if (isNaN(lastChar)) {
        return string + 1;
    }
    let indexfirstNaN;
    for (let i = string.length -2; i >= 0; i--) {
        if (isNaN(string[i])) {
            indexfirstNaN = i;
            break;
        }
    }
    let partialString = string.substring(0, indexfirstNaN + 1); //prende la stringa "montagna"
    let stringNumber = string.substring(indexfirstNaN + 1) //prende la stringa "88"
    const number = parseInt(stringNumber) + 1; //aumenta il numero di 1 dopo averlo trasformato in numero
    return partialString + number; //unisce stringa e numero parsato 
}

console.log(incrementString("montagna88")); //--> result "montagna89"
console.log(incrementString("montagna")); //--> result "montagna1"
console.log(incrementString("55montagna")); //--> result "55montagna1"


function incrementStringRegex(string) {
    const regex = RegExp(/\d+$/); //prende le ultime digite della stringa che sono numeri
    let searchResult = regex.exec(string); //taglia quello che combacia nella stringa e lo mette in searchResult
    if(!searchResult){
        return string + 1;
    } else {
        let numberFoundString = searchResult[0];
        const numberInt = parseInt(numberFoundString);
        return string.substring(0, string.length - numberFoundString.length) + (numberInt + 1);
    }
}

console.log(incrementStringRegex("montagna88")); //--> result "montagna89"
console.log(incrementStringRegex("montagna")); //--> result "montagna1"
console.log(incrementStringRegex("55montagna")); //--> result "55montagna1"