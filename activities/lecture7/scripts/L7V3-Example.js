// Generate a random number within specific boundaries
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate the area of a circle with a given radius
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Set values and display in the HTML
const randomNumber = getRandomNumber(1, 100);
document.getElementById("random-number").innerHTML = "Random number between 1 and 100: " + randomNumber;

const radius = 6;
const circleArea = calculateCircleArea(radius);
document.getElementById("circle-area").innerHTML = "Area of a circle with radius 6: " + circleArea.toFixed(2);
