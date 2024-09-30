let button = document.getElementById("btn");

button.addEventListener("click", () => {
   let count = 0; // A counter to keep track of how many times the interval has run

   const intervalId = setInterval(() => {
      // Update the innerHTML of the element
      document.querySelector(".box").innerHTML = "<b>This is clicked " + count + "</b>";

      // Show the alert
      alert("Clicked " + count);

      count++;

      // Stop the interval after 5 executions
      if (count >= 5) {
         clearInterval(intervalId);  // Stop the interval after a certain number of iterations
      }
   }, 1000);  // Interval is set to 1 second (1000 milliseconds)
});
