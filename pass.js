// JavaScript code for username validation

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const submitButton = document.getElementById('submit-button');

// Regular expression for allowed username format (change this as needed)
const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

// Function to check if the username is valid
function checkUsernameValidity() {
    const username = usernameInput.value;
    
    if (usernamePattern.test(username)) {
        usernameError.textContent = ''; // Username is valid, clear error message
        return true;
    } else {
        usernameError.textContent = 'Username must be 3-16 characters and can only contain letters, numbers, hyphens, and underscores.';
        return false;
    }
}

// JavaScript code for password validation

function validatePassword(password) {
    // Define the criteria for a strong password
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // Check the password against the criteria
    if (password.length < minLength) {
        return '> Password must be at least ' + minLength + ' characters long. <';
    }

    if (!hasUpperCase) {
        return '> Password must contain at least one uppercase letter. <';
    }

    if (!hasLowerCase) {
        return '> Password must contain at least one lowercase letter. <';
    }

    if (!hasNumbers) {
        return '> Password must contain at least one number. <';
    }

    if (!hasSpecialChars) {
        return '> Password must contain at least one special character. <';
    }

    // If all criteria are met, the password is valid
    return '> Password is valid. <';
}

// Add an event listener to the password input
const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('password-feedback');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const validationMessage = validatePassword(password);

    // Display the validation message
    passwordFeedback.textContent = validationMessage;
});

// Function to check if the passwords match
function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordError.textContent = ''; // Passwords match, clear error message
        return true;
    } else {
        passwordError.textContent = 'Passwords do not match';
        return false;
    }
}

// Add an event listener to the confirm password field
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

// Add an event listener to the username field
usernameInput.addEventListener('input', checkUsernameValidity);

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    if (checkPasswordMatch() && checkUsernameValidity()) {
        // Passwords match and username is valid, you can perform further actions here
        // For now, simulate a redirect to the landing page
        window.location.href = 'home.html';
    } else {
        // Passwords do not match or username is not valid, do not proceed with submission
    }
}

// Add an event listener to the submit button
submitButton.addEventListener('click', handleFormSubmit);
