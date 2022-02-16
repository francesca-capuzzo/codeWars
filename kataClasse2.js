//dato un numero trovare tutti i multipli di 3 e 5 minori di quel numero e una volta trovati, sommarli tra di loro (i numeri negativi ritornano zero)

function solution(number) {
    let set = new Set();
    for (let i = 3; i < number; i += 3) {
        set.add(i);
    }
    for (let i = 5; i < number; i += 5) {
        set.add(i);
    }
    let sum = 0;
    for (const element of set) {
        sum += element;
    }
    return sum;
}

//IL SET è UN INSIEME E COME PROPRIETà STANDARD, NON PUò CONTENERE DUE ELEMENTI UGUALI!!!
console.log(solution(-3)); //--> result 0
console.log(solution(2)); //--> result 0
console.log(solution(10)); //--> result 23
console.log(solution(14)); //--> result 45

//TRASFORMO UN ARRAY CON NUMERI DOPPI IN UN ARRAY CON NUMERI NON RIPETUTI
const array = [1, 2, 2, 3, 5, 5, 7, 8, 7];
array = [...new Set(array)];
console.log(array);


function solution2(number) {
    const sum = 0;
    for (let i = 0; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(solution2(-3)); //--> result 0
console.log(solution2(2)); //--> result 0
console.log(solution2(10)); //--> result 23
console.log(solution2(14)); //--> result 45

function solution3(number) {
    return number < 0 ? 0 : [...new Array(number).keys()].reduce((p, c) => (i % 3 === 0 || i % 5 === 0) ? p+c : p, 0); //crea un array di numeri da 0 al numero //--> .keys() restituisce l'indice altrimenti riempirebbe l'array di undefined
}

console.log(solution3(-3)); //--> result 0
console.log(solution3(2)); //--> result 0
console.log(solution3(10)); //--> result 23
console.log(solution3(14)); //--> result 45