// Function to generate letter combinations for a given digit string
const letterCombinations = (digits) => {
    const length = digits?.length; // Get the length of the input digits
    const result = []; // Initialize an array to store the combinations
  
    // Base case: If the input digits are empty, return an empty array
    if (!length) {
      return result;
    }
  
    // Map of digits to corresponding letters on a phone keypad
    const digitMap = {
      1: 'abc',
      2: 'def',
      3: 'ghi',
      4: 'jkl',
      5: 'mno',
      6: 'pqr',
      7: 'stu',
      8: 'vwx',
      9: 'yz',
    };
  
    // Recursive function to generate combinations
    const generateCombinations = (index, combination) => {
      let letter;
      let letterIndex;
  
      // If the index exceeds the length, add the combination to the result array
      if (index >= length) {
        result.push(combination);
        return;
      }
  
      // Get the letters corresponding to the current digit
      const digit = digitMap[digits[index]];
  
      // Iterate through each letter and recursively generate combinations
      letterIndex = 0;
      while ((letter = digit[letterIndex++])) {
        generateCombinations(index + 1, combination + letter);
      }
    };
  
    // Start generating combinations from the first digit
    generateCombinations(0, '');
  
    // Return the final array of combinations
    return result;
  };
  
  // Test the function with different input digits
  console.log(letterCombinations("12")); // Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  console.log(letterCombinations("9"));  // Output: ['yw', 'yx', 'yy', 'zw', 'zx', 'zy']
  