// Define a function to check if the signs of two numbers are opposite
const opposite_Signs = (x, y) => {
    // Check if the parameters are numbers
    if ((typeof x!= "number") || (typeof y!= "number"))
    {
      return 'Parameters value must be number!' // Return an error message if parameters are not numbers
    }  
     // Check if the signs of the two numbers are opposite
     if ((x ^ y) < 0)
       return true; // Return true if signs are opposite
     else
       return false; // Return false if signs are not opposite
     }
x = 100 // Assign a value to variable x
y = -100 // Assign a value to variable y
result = opposite_Signs(x, y) // Call the function to check if signs are opposite
if (result === true) 
  console.log("Signs are opposite"); // Print a message if signs are opposite
else if (result === false) 
  console.log("Signs are not opposite"); // Print a message if signs are not opposite
else console.log(result); // Print the result if it's neither true nor false  
x = 100 // Assign a value to variable x
y = 100 // Assign a value to variable y
result = opposite_Signs(x, y) // Call the function to check if signs are opposite

if (result === true) 
  console.log("Signs are opposite"); // Print a message if signs are opposite
else if (result === false) 
  console.log("Signs are not opposite"); // Print a message if signs are not opposite
else console.log(result); // Print the result if it's neither true nor false  
x = '100' // Assign a value to variable x
y = 100 // Assign a value to variable y
result = opposite_Signs(x, y) // Call the function to check if signs are opposite
if (result === true) 
  console.log("Signs are opposite"); // Print a message if signs are opposite
else if (result === false) 
  console.log("Signs are not opposite"); // Print a message if signs are not opposite
else console.log(result); // Print the result if it's neither true nor false
