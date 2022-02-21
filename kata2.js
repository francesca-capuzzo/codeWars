function eachCons(array, n) {
    let newArray = [];
    let i = 0;
    let len = array.length;
    while (i < len) {
        newArray.push(array.slice(i, i+=n));
    }
    return newArray;
}

//DOES NOT WORK!!!!
console.log(eachCons([1,2,3,4], 3))
//=> [[1,2,3],[2,3,4]]


//make it negative:
function makeNegative(num) {
    return num <= 0 ? num : -num;
}
console.log(makeNegative(0)); 


//return highest and lower:
function highAndLow(numbers) {
    let string = numbers.split(" ");
    let array = [];
    for (const char of string) {
        let num = parseInt(char);
        array.push(num);
    }
    let min = Math.min(...array);
    let max = Math.max(...array);
    return `${max} ${min}`;
    // return (max+"" + " " + min+"");
}

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5" 