function primeTo(number) {
    const primeNumbers = [2];
    for (let i = 3; i <= number; i++) {
        let numberToCheck = i;
        let isPrime = true;
        for (const prime of primeNumbers) {
            if (numberToCheck % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }
    }
    return primeNumbers;
}

console.log(primeTo(3));
console.log(primeTo(5));
console.log(primeTo(11));


function primeTo2(number) {
    return [...new Array(number + 1).keys()].filter(function(x){
        let numberToCheck = 2;
        for (let i = 2; i <= x; i++) {
            if (x % i !== 0) {
                numberToCheck++;
            }
        }
        if (numberToCheck === x && x !== 0) {
            return true;
        }
    })
}


console.log(primeTo2(3));
console.log(primeTo2(5));
console.log(primeTo2(11));



function primeTo3(number) {
    let array = Array.from({length: number - 2}, (v, i) => i + 3);
    return array.reduce((p, c) => p.some(element => c % element === 0) ? p : [...p,c], [2]);
}

console.log(primeTo3(3));
console.log(primeTo3(5));
console.log(primeTo3(11));



function primeTo4(number) {
    let array = Array.from({length: number - 1}, (v, i) => i + 2);
    return array.filter(c => !array.some(element => (c % element === 0 && c !== element)));
}

console.log(primeTo4(3));
console.log(primeTo4(5));
console.log(primeTo4(11));