// Validate form inputs using Regular Expressions
function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Regular expressions for validation 
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/i; // Allows letters, optional middle name with space, non-case sensitive
    const lastNameRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)?$/i; // Allows letters, apostrophes, hyphens, non-case sensitive
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Traditional email format, with ensuring the domains are 2-6 chars
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/; // At least 1 uppercase, lowercase, number, special character, 12 chars long

    // Validation flags
    let valid = true;
    let errorMsg = "";

    // Validate First Name
    if (!nameRegex.test(firstName)) {
        valid = false;
        errorMsg += "Invalid First Name. ";
    }

    // Validate Last Name
    if (!lastNameRegex.test(lastName)) {
        valid = false;
        errorMsg += "Invalid Last Name. ";
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        valid = false;
        errorMsg += "Invalid Email. ";
    }

    // Validate Password
    if (!passwordRegex.test(password)) {
        valid = false;
        errorMsg += "Invalid Password. ";
    }

    // Provide a message to the user according to his/her input
    if (valid) {
        alert("The form is successfully submitted");
    } else {
        alert("There are some errors in your form submission: " + errorMsg);
    }
}
