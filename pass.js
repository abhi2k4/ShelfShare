

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const submitButton = document.getElementById('submit-button');

const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

function checkUsernameValidity() {
    const username = usernameInput.value;
    
    if (usernamePattern.test(username)) {
        usernameError.textContent = ''; 
        return true;
    } else {
        usernameError.textContent = 'Username must be 3-16 characters and can only contain letters, numbers, hyphens, and underscores.';
        return false;
    }
}


function validatePassword(password) {

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

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

    return '> Password is valid. <';
}

const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('password-feedback');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', function () {
    const password = this.value;
    const validationMessage = validatePassword(password);

    passwordFeedback.textContent = validationMessage;
});

function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        passwordError.textContent = '';
        return true;
    } else {
        passwordError.textContent = 'Passwords do not match';
        return false;
    }
}

confirmPasswordInput.addEventListener('input', checkPasswordMatch);

usernameInput.addEventListener('input', checkUsernameValidity);


function handleFormSubmit(event) {
    event.preventDefault(); 
    
    if (checkPasswordMatch() && checkUsernameValidity()) {
        window.location.href = 'home.html';
    } else {
       
    }
}

submitButton.addEventListener('click', handleFormSubmit);
