// let value = 371;
// let string = value.toString();
// let result = [];
// let finalResult = 0;
// for (let i = 0; i < string.length; i++) {
//     const digit = string[i];
//     let len = string.length;
//     result.push(Math.pow(digit, len));
//     finalResult = result.reduce((a, b) => a + b, 0);
// }
// if (finalResult == value) {
//     console.log(true);
// } else {
//     console.log(false);
// };


let a = "";
let b = "";
let result = 0;
if (a==="" && b==="") {
    result.toString();
    console.log(result);
}
else if(a===""){
    console.log(+b);
}
else if(b===""){
    console.log(+a).toString();
} else {
    console.log((+a)+(+b));
}
console.log(typeof(result));



