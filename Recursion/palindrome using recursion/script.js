// Define a function named 'test' that checks if a given string is a palindrome
const test = (text) => {
    // Check if the input is not a string
    if (typeof text !== 'string') {
      return 'String should not be empty!';
    }
  
    // Check if the length of the string is less than or equal to 1, it is a palindrome
    if (text.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters of the string are equal
    if (text[0] !== text[text.length - 1]) {
      return false;
    } else {
      // Recursively call the 'test' function with the string excluding the first and last characters
      return test(text.slice(1, text.length - 1));
    }
  };
  
  // Test the 'test' function with different input strings
  console.log(test("madam")); // Output: true (palindrome)
  console.log(test("abdb"));  // Output: false (not a palindrome)
  console.log(test("ab"));    // Output: false (not a palindrome)
  console.log(test("a"));     // Output: true (palindrome) 
  