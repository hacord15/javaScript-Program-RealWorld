// Function to find the longest substring without repeating characters
function longest_substring_without_repeating_characters(input) {
    // Split the input string into an array of characters
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
  
    // Loop through each character in the input string
    for (var i = 0; i < chars.length; i++) {
      curr_char = chars[i];
  
      // Check if the character is not already in the hash table
      if (!hash[chars[i]]) { 
        // Add the character to the current substring
        str += curr_char; 
        // Update the hash table with the character and its index
        hash[chars[i]] = {index:i};
      } else {
        // If there's a repeating character, compare lengths and update if necessary
        if (longest_string.length <= str.length) {
          longest_string = str;
        }
        // Get the index of the previous occurrence of the repeating character
        var prev_dupeIndex = hash[curr_char].index;
        // Extract the substring from the previous occurrence to the current index
        var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
        // Update the current substring with the new non-repeating characters
        str = str_FromPrevDupe + curr_char;
        // Reset the hash table for the new substring
        hash = {};
        // Update the hash table with the characters and their indices in the new substring
        for (var j = prev_dupeIndex + 1; j <= i; j++) {
          hash[input.charAt(j)] = {index:j};
        }
      }
    }
  
    // Return the longest substring (either the current substring or the previously found longest)
    return longest_string.length > str.length ? longest_string : str;
  }
  
  // Example usage:
  console.log(longest_substring_without_repeating_characters("google.com")); 
  console.log(longest_substring_without_repeating_characters("example.com"));  
  