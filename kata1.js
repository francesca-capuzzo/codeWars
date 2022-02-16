//FUNCTION THAT REMOVE FIRST AND LAST CHARACTER OF A STRING:
function removeChar(str) {
    let newString = str;
    let char1 = newString[0]+"";
    let char2 = newString[str.length-1]+"";
    return str.replace(char1, '').replace(char2,'');
}

console.log(removeChar("hadjsks"));


function remove(string) {
    let newString = string;
    let lastChar = string[newString.length-1]+"";
    if (lastChar === "!") {
        return string.replace(lastChar,"")
    }
    return string;
}

console.log(remove("hi"));