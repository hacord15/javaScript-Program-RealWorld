// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr){
    let sum =0;

    for (let i = 0; i < array.length; i++) {
        if (arr[i] <0) {
            break;
        }
    sum += arr[i];     
    }
    return sum;
}

const numbers = [3,5,6,-5,3,2];
console.log(sumUntilNegative(numbers));
