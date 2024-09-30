// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countV(str){
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length :0;
}

const inputString ="Hello World";
console.log(countV(inputString));