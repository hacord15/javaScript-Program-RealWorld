// Define a function 'intersection' that computes the intersection of two arrays
const intersection = (a, b) => {
    // Create a Set 's' containing the elements of array 'b'
    const s = new Set(b);
    // Filter elements from array 'a' if they exist in the Set 's'
    return a.filter(x => s.has(x));
  };
  
  // Test the 'intersection' function by finding the intersection of two arrays
  console.log(intersection([1, 2, 3], [4, 3, 2]));
  // Output: [2, 3]
  