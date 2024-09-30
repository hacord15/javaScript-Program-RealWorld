// The charAt() method is used to get the specified character from a string.
// Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
// The toUpperCase() method is used to convert the string value to uppercase.
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The push() method is used to add one or more elements to the end of an array and returns the new length of the array.

// After completing the for loop return the final string :
// return newarray1.join(' ');
// The join() method joins all elements of an array into a string.


function uppercase(str){
    var array1 =str.split('');

    var newarray1 = [];

    for(var x=0; x<array1.length; x++){

        newarray1.push(array1[x].charAt(0).toUpperCase() +array1[x].slice(1));
    }
    return newarray1.join('');
}

console.log(uppercase("the quick brown fox"));