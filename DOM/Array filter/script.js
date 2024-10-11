//#Source https://bit.ly/2neWfJ2 
// Define a function 'reject' that filters elements from an array based on a provided predicate function
const reject = (pred, array) => 
    // Filter the array using the negation of the predicate function
    array.filter((...args) => !pred(...args));
  
  // Test the 'reject' function with a predicate function and an array
  console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5])); // Output: [1, 3, 5]
  console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana'])); // Output: ['Pear', 'Kiwi']
  