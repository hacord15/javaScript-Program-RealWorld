// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.







function reversed(str){
    let reverseStr =str.split('').reverse().join('');
    return str + reverseStr;
}

let originalStr ="hello";
let mirrorStr =reversed(originalStr);
console.log(mirrorStr);