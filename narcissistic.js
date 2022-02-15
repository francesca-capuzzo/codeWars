let value = 371;
let string = value.toString();
let result = [];
let finalResult = 0;
for (let i = 0; i < string.length; i++) {
    const digit = string[i];
    let len = string.length;
    result.push(Math.pow(digit, len));
    finalResult = result.reduce((a, b) => a + b, 0);
}
if (finalResult == value) {
    console.log(true);
} else {
    console.log(false);
};


function IsNarcissistic(number) {
    let stringNumber = number + "";
    let pow = stringNumber.length;
    let sum = 0;
    for (let i = 0; i < stringNumber.length; i++) {
        const char = stringNumber[i];
        const intNumber = parseInt(char);
        const result = Math.pow(intNumber, pow);
        sum += result;
    }
    return sum === number;
}


function isNarcissistic3(number){
    return number === [...(number + "")].reduce((p, c, i, a) => p + Math.pow(c, a.length),0)
}

// let a = "";
// let b = "";
// let result = 0;
// if (a==="" && b==="") {
//     result.toString();
//     console.log(result);
// }
// else if(a===""){
//     console.log(+b);
// }
// else if(b===""){
//     console.log(+a).toString();
// } else {
//     console.log((+a)+(+b));
// }
// console.log(typeof(result));




const scores = ["2:4", "3:2", "1:1", "4:2"];

function points(games) {
    let score = 0;
    for (const game of games) {
        const number = game.split(":");
        const number1 = parseInt(number[0]);
        const number2 = parseInt(number[1]);
        if (number1>number2) {
            score+=3;
        }
        else if(number1===number2){
            score+=1
        }
    }
    return score;
}

console.log(points(scores));


function points3(games) {
    return games.reduce((p, c) => (c[0]>c[2]) ? p+3 : (c[0] === c[2]) ? p+1 : p, 0); //p---> è il counter che inizia da zero, ultimo numero della reduce
}

console.log(points3(scores));

function points4(games) {
    return games.reduce((sum, [x, ,y]) => sum + (x > y ? 3 : x == y), 0);  //x == y --> TRUE CHE FORZATO A NUMERO è UGUALE 1 MENTRE SE UGUALE A FALSE è UGUALE A 0
}