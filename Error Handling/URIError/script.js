// Define a function named decode_URI_String that takes a parameter uriString
function decode_URI_String(uriString) {
    // Attempt to decode the URI string
    try {
      // Decode the URI string
      const decodedURI = decodeURI(uriString);
      // Log the decoded URI to the console
      console.log('Decoded URI:', decodedURI);
    } catch (error) {
      // If an error occurs during execution
      // Check if the error is a URIError
      if (error instanceof URIError) {
        // If the error is a URIError, log the error message with 'URIError' prefix
        console.log('URIError:', error.message);
      } else {
        // If the error is not a URIError, log the error message with 'Error' prefix
        console.log('Error:', error.message);
      }
    }
  }
  
  // Example:
  // Call the decode_URI_String function with a valid URI string
  decode_URI_String('https://example.com/'); // Valid URI
  // Call the decode_URI_String function with an invalid URI string containing special characters
  decode_URI_String('https://example.com/%%invalidURI'); // Invalid URI

  