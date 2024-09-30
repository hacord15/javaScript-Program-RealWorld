// Extending the prototype of Array to add a binary search method
Array.prototype.br_search = function (target) {
    // Calculate the index of the middle element
    var half = parseInt(this.length / 2);
    
    // Base case: If the target is equal to the middle element, return the index
    if (target === this[half]) {
      return half;
    }
    
    // Recursive case: If the target is greater than the middle element, search the right half
    if (target > this[half]) {
      return half + this.slice(half, this.length).br_search(target);
    } 
    // Recursive case: If the target is less than the middle element, search the left half
    else {
      return this.slice(0, half).br_search(target);
    }
  };
  
  // Example usage: Create an array and perform a binary search for the target value
  var l = [0, 1, 2, 3, 4, 5, 6];
  console.log(l.br_search(5)); // Output: 5 (index of the target value) 
  