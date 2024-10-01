// Get current time and show greeting based on hour
function showGreeting() {
	var today = new Date();
	var hour = today.getHours();
	var greetingMessage = "";
  
	if (hour < 12) {
	  greetingMessage = "Good Morning!";
	} else if (hour < 15) {
	  greetingMessage = "Hey! I think we are in class!";
	} else {
	  greetingMessage = "Welcome!";
	}
  
	document.getElementById("greeting").innerHTML = greetingMessage;
  }
  
  showGreeting();  
  
  // Get the two numbers from input fields and perform the selected operation
  function calculate(operation) {
	var num1 = parseFloat(document.getElementById('number1').value);
	var num2 = parseFloat(document.getElementById('number2').value);
	var result;
  
	if (isNaN(num1) || isNaN(num2)) {
	  alert("Please enter valid numbers!");
	  return;
	}
  
	switch (operation) {
	  case 'add':
		result = num1 + num2;
		break;
	  case 'subtract':
		result = num1 - num2;
		break;
	  case 'multiply':
		result = num1 * num2;
		break;
	  case 'divide':
		if (num2 === 0) {
		  alert("Cannot divide by zero!");
		  return;
		}
		result = num1 / num2;
		break;
	  default:
		result = "Invalid Operation";
	}
  
	// Display the result in the UI
	document.getElementById('result').textContent = result;
  }
  