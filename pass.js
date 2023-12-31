

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

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.["com"]{2,}$/;

function checkEmailValidity() {
    const email = emailInput.value;
    
    if (emailPattern.test(email)) {
        emailError.textContent = ''; 
        return true;
    } else {
        emailError.textContent = 'Invalid Email';
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
        return ' Password must be at least ' + minLength + ' characters long. ';
    }

    if (!hasUpperCase) {
        return ' Password must contain at least one uppercase letter. ';
    }

    if (!hasLowerCase) {
        return ' Password must contain at least one lowercase letter. ';
    }

    if (!hasNumbers) {
        return ' Password must contain at least one number. ';
    }

    if (!hasSpecialChars) {
        return ' Password must contain at least one special character. ';
    }

    return '  ';
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

emailInput.addEventListener('input', checkEmailValidity);


function handleFormSubmit(event) {
    event.preventDefault(); 
    
    if (checkPasswordMatch() && checkUsernameValidity() && checkEmailValidity() ) {
        window.location.href = 'home.html';
    } else {
       
    }
}

submitButton.addEventListener('click', handleFormSubmit);



 /*----------------Password visibility----------------*/

const inputIcon = document.querySelector(".input__icon");
const inputPassword = document.querySelector(".password");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("ri-eye-off-line");
  inputIcon.classList.toggle("ri-eye-line");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});

function togglePasswordVisibility(inputId, iconId) {
    console.log("Function called with inputId:", inputId);
    console.log("Function called with iconId:", iconId);

    const passwordInput = document.getElementById(inputId);
    const passwordIcon = document.getElementById(iconId);

    console.log("Current input type:", passwordInput.type);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("ri-eye-off-line");
        passwordIcon.classList.add("ri-eye-line");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("ri-eye-line");
        passwordIcon.classList.add("ri-eye-off-line");
    }

    console.log("Updated input type:", passwordInput.type);
}