// 1. Write a JavaScript program to calculate the factorial of a number.  
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120


// Recursive JavaScript function to calculate the factorial of a number.

function factorial(x) {
    // Base case: factorial of 0 is 1.
    if (x === 0) {
      return 1;
    }
  
    // Recursive case: x! = x * (x-1)!
    return x * factorial(x - 1);
  }
  
  console.log(factorial(5));
  