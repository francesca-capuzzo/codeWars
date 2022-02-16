//se la lunghezza della stringa è pari, ritorna i due caratteri centrali, altrimenti ritorna l'unico carattere centrale
function getMiddle(string) {
    let len = string.length;
    if (len % 2 === 0) {
        let firstLetterIndex = (len / 2) - 1;
        let secondLetterIndex = (len / 2);
        return string[firstLetterIndex] + string[secondLetterIndex];
    } else {
        let middleLetterIndex = Math.floor(len / 2);
        return string[middleLetterIndex];
    }
}

console.log(getMiddle("pippo")); //--> result: p
console.log(getMiddle("paperino")); //--> result: er


function getMiddle2(string) {
    return [...string].reduce((p,c,i,a) => a.length % 2 === 0 ? string.substring((i/2), ((i/2) + 2)) : a[i / 2]); //--> nell'ultimo step non servirebbe il Math.floor perchè le parole dispari hanno indici pari (partono da 0)
}

console.log(getMiddle2("pippo")); //--> result: p
console.log(getMiddle2("paperino")); //--> result: er


function getMiddle3(string) {
    return string.slice((string.length - 1) / 2, (string.length / 2) + 1); //--> slice di default arrotonda verso il basso e il secondo carattere non è mai compreso. --> per senso andrebbe usato Math.floor ma non è necessario perchè è una proprietà intrinseca di SLICE
}

console.log(getMiddle3("pippo")); //--> result: p
console.log(getMiddle3("paperino")); //--> result: er


