const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = "form-control error";
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            showError(
                input, 
                `${getFieldName(input)} is required`
            );
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input, 
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if(input.value.length > max) {
        showError(
            input, 
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Check password match
function checkPasswordsMatch(inputPass, inputRePass) {
    if (inputPass.value !== inputRePass.value) {
        showError(
            inputRePass, 
            "Password do not match"
        );
    }
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, rePassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, rePassword);

    // if (username.value === "") {
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username);
    // }
    
    // if (email.value === "") {
    //     showError(email, "Email is required");
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, "Email is not valid");
    // }
    // else {
    //     showSuccess(email);
    // }

    // if (password.value === "") {
    //     showError(password, "Password is required");
    // } else {
    //     showSuccess(password);
    // }

    // if (rePassword.value === "") {
    //     showError(rePassword, "Repeat password is required");
    // } else {
    //     showSuccess(rePassword);
    // }
});

