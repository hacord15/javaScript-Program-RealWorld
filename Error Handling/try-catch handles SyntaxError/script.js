// Define a function named parse_JSON that attempts to parse a JSON string
function parse_JSON(jsonString) {
    // Try block to attempt parsing the JSON string and handle potential errors
    try {
      // Attempt to parse the JSON string and store the parsed data
      const parsedData = JSON.parse(jsonString);
      // Log the parsed data to the console
      console.log('Parsed data:', parsedData);
    } catch (error) {
      // Catch block to handle errors
      // Check if the error is an instance of SyntaxError
      if (error instanceof SyntaxError) {
        // If the error is a SyntaxError, log the error message to the console
        console.log('SyntaxError:', error.message);
      } else {
        // If the error is not a SyntaxError, log the error message to the console
        console.log('Error:', error.message);
      }
    }
  }
  
  // Example:
  // Call the parse_JSON function to demonstrate parsing JSON strings
  parse_JSON('{"name": "Rowan Octave", "age": 30}'); // Valid JSON
  parse_JSON('{"name": "Rowan Octave", "age": 30,}'); // Invalid JSON
  