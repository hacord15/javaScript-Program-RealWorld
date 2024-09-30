// Extend Array prototype to include a merge sort function
Array.prototype.merge_Sort = function () {
    // Base case: If the array has 1 or fewer elements, it is already sorted
    if (this.length <= 1) {
      return this;
    }
  
    // Calculate the middle index
    var half = parseInt(this.length / 2);
  
    // Recursively sort the left and right halves of the array
    var left = this.slice(0, half).merge_Sort();
    var right = this.slice(half, this.length).merge_Sort();
  
    // Merge function to combine two sorted arrays
    var merge = function (left, right) {
      var mergedArray = [];
  
      // While both left and right arrays have elements
      while (left.length > 0 && right.length > 0) {
        // Compare the first elements of left and right, push the smaller one to the mergedArray
        mergedArray.push((left[0] <= right[0]) ? left.shift() : right.shift());
      }
  
      // Concatenate any remaining elements in left and right to the mergedArray
      return mergedArray.concat(left).concat(right);
    };
  
    // Return the merged result of sorting the left and right halves
    return merge(left, right);
  };
  
  // Example usage: Perform merge sort on an array
  var inputArray = [34, 7, 23, 32, 5, 62];
  var sortedArray = inputArray.merge_Sort();
  
  // Output the sorted array
  console.log(sortedArray); 
  