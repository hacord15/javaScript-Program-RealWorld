// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.


var gcd = function(a, b) {
    // Base case: if b is 0, then GCD is a.
    if (!b) {
        return a;
    }

    // Recursive case: calculate GCD using the remainder (a % b).
    return gcd(b, a % b);
};

console.log(gcd(2154, 458)); 
