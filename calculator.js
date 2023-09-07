// Function to add two numbers
function addNumbers() {
    // Get the input values from the user
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    // Check if the input values are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      // Calculate the sum
      var sum = num1 + num2;
  
      // Display the result
      document.getElementById("result").innerHTML = "Result: " + sum;
    } else {
      // Display an error message if input values are not valid
      document.getElementById("result").innerHTML = "Please enter valid numbers";
    }
  }

  