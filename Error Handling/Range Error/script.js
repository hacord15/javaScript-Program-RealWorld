// Define a function named access_Array_Element that takes two parameters: array and index
function access_Array_Element(array, index) {
    // Attempt to access the element at the given index in the array
    try {
      // Access the element at the specified index in the array
      const element = array[index];
      // Check if the element is undefined (which happens when index is out of bounds)
      if (element === undefined) {
        throw new RangeError('Index out of bounds');
      }
      // Log the accessed element to the console
      console.log('Accessed element:', element);
    } catch (error) {
      // If an error occurs during execution
      // Check if the error is a RangeError
      if (error instanceof RangeError) {
        // If the error is a RangeError, log a message indicating that the index is invalid
        console.log('Error: Invalid index. Please provide a valid index within the array bounds.');
      } else {
        // If the error is not a RangeError, log the error message
        console.log('Error:', error.message);
      }
    }
  }
  // Example
  // Create an array named nums with some elements
  const nums = [1, 2, 3, 4, 5];
  // Call the access_Array_Element function with nums and index 1, which is a valid index
  access_Array_Element(nums, 1); // Valid index
  // Call the access_Array_Element function with nums and index 5, which is an invalid index
  access_Array_Element(nums, 5); // Invalid index
  