 
const submit = document.querySelector("#submit");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    formSubmit();
});
submit.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        formSubmit();
    }
});

function formSubmit() {
    let errorID = [];
    let errorType = [];

    if(firstName.value === "") {
        errorID.push("first-name");
        errorType.push("empty");
    }
    if(lastName.value === "") {
        errorID.push("last-name");
        errorType.push("empty");
    }
    if(email.value === "") {
        errorID.push("email");
        errorType.push("empty");
    } else {
        validateEmail(errorID, errorType);
    }
    if(password.value === "") {
        errorID.push("password");
        errorType.push("empty");
    } else {
        validatePassword(errorID, errorType);
    }

    if(errorID.length > 0) {
        error(errorID, errorType);
    } else {
        alert("Form Submitted");
        location.reload();
    }
    
}

function error(errorID, errorType) {

    for(var i = 0; i < errorID.length; i++) {

        let item = errorID[i];
        let type = errorType[i];

        let errorImg = document.querySelector("." + item + "-error");
        let errorText = document.querySelector("." + item + "-label");
        let textBox = document.querySelector("#" + item);

        textBox.style.border = "1px solid hsl(0, 100%, 74%)";
        errorImg.style.display = "inline";

        if(type === "empty") {
            errorText.innerHTML = "field cannot be empty";
        } else if(item === "email" && type === "invalid") {
            errorText.innerHTML = "looks like this is not an email";
        } else if(item === "password" && type === "invalid") {
            errorText.innerHTML = "password must be between 7 and 16 characters long, must start with a letter, and can only contain letters, numbers, and underscores";
        }

    }
    // alert("Error");
}

function validateEmail(errorID, errorType) {
    const emailInput = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(emailInput) === false) {
        errorID.push("email");
        errorType.push("invalid");
    }
}

function validatePassword(errorID, errorType) {
    const passwordInput = password.value;
    const passwordRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,15}$/;

    if(passwordRegex.test(passwordInput) === false) {
        errorID.push("password");
        errorType.push("invalid");
    }
}