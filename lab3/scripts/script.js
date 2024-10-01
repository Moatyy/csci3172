// Change background color based on selected day
document.getElementById('days').addEventListener('change', function() {
    let selectedDay = this.value;
    let container = document.getElementById('container');

    switch (selectedDay) {
        case 'Monday':
            container.style.backgroundColor = 'lightblue';
            break;
        case 'Tuesday':
            container.style.backgroundColor = 'lightgreen';
            break;
        case 'Wednesday':
            container.style.backgroundColor = 'lightcoral';
            break;
        case 'Thursday':
            container.style.backgroundColor = 'lightgoldenrodyellow';
            break;
        case 'Friday':
            container.style.backgroundColor = 'lightpink';
            break;
        case 'Saturday':
            container.style.backgroundColor = 'lightgray';
            break;
        case 'Sunday':
            container.style.backgroundColor = 'lightsalmon';
            break;
        default:
            container.style.backgroundColor = 'white';
    }
});

// Check number properties
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let number = parseInt(document.getElementById('numberInput').value);
    let resultMessage = '';

    // Check if the number is odd or even
    if (number % 2 === 0) {
        resultMessage += 'The number entered is even. ';
    } else {
        resultMessage += 'The number entered is odd. ';
    }

    // Check if the number is prime or composite
    if (isPrime(number)) {
        resultMessage += 'It is a prime number. ';
    } else {
        resultMessage += 'It is a composite number. ';
    }

    // Check the range of the number
    if (number <= 50) {
        resultMessage += 'It is less than or equal to 50.';
    } else if (number > 50 && number <= 75) {
        resultMessage += 'It is greater than 50 and less than or equal to 75.';
    } else if (number > 75 && number <= 100) {
        resultMessage += 'It is greater than 75 and less than or equal to 100.';
    } else {
        resultMessage += 'It is greater than 100.';
    }

    // Display the result
    document.getElementById('result').textContent = resultMessage;
});

// Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
