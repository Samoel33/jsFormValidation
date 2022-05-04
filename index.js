const form = document.querySelector('.form');
const error = document.querySelector('.error');
const submitBtn = document.querySelector('.submit');


//INPUT values

const fname = document.querySelectorAll('.name');
const lname = document.querySelector('#lname')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#cpassword');


//VALIDATION patterns.

let namePattern = /^[A-Za-z]+$/; //NAME should not contain a number or special character
let emailPattern = /^[\w-\.]+@[\w-\.]+\.[a-z]{2,4}$/; //EMAIL domain to contain min of 2char and max of 4char
let passwordPattern = /^[\w]+[!@#$%^&*=~<>]/; //PASSWORD to contain numbers and selected special chars

//INPUT , CLICK AND BLUR EVENTS USED TO PERFORM THE CHECKS AND VALIDATION.

//INPUT FOR FNAME AND LNAME USES INPUT EVENT TO CHECK ON TYPING AND VALIDATE.
function capitalize(word) {
    const lowerCase = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}
fname.forEach(word => {
    word.addEventListener('input', (e) => {
        const newName = capitalize(e.target.value);
        if (namePattern.test(newName)) {
            e.target.style.border = '1px solid green';
            form.style.borderTop = '2px solid green';
            error.innerHTML = "";

        } else {
            form.style.borderTop = '2px solid red';
            e.target.style.border = '1px solid red';
            document.querySelector(".success").innerHTML = "";
            error.innerHTML = 'Name/Last Name should not contain a number or special character'
        }
        if (e.target.value === "" || e.target.value.length <= 1) {
            error.innerHTML = "";
            form.style.borderTop = "2px solid transparent";
            e.target.style.border = "none";
            document.querySelector(".success").innerHTML = "";
        }
    });
});

email.addEventListener('input', (e) => {
    const lowerCaseEmail = e.target.value.toLowerCase();
    if (emailPattern.test(lowerCaseEmail)) {
        e.target.style.border = "1px solid green";
        form.style.borderRight = "2px solid green";
        error.innerHTML = "";

    } else {
        form.style.borderRight = '2px solid red';
        e.target.style.border = '1px solid red';
        error.innerHTML = 'The Email enter is Invalid'
        document.querySelector(".success").innerHTML = "";
    }
    if (e.target.value === "" || e.target.value.length <= 1) {
        error.innerHTML = "";
        form.style.borderRight = "2px solid transparent";
        e.target.style.border = "none";
        document.querySelector(".success").innerHTML = "";
    }

})

password.addEventListener("blur", (e) => {
    if (passwordPattern.test(e.target.value)) {
        e.target.style.border = "1px solid green";
        form.style.borderBottom = "2px solid green";
        error.innerHTML = "";
    } else {
        form.style.borderBottom = "2px solid red";
        e.target.style.border = "1px solid red";
        document.querySelector(".success").innerHTML = "";
        error.innerHTML = "Password should start with a letter and contain atleast 2 special characters";
    }
    if (e.target.value === "") {
        error.innerHTML = "";
        form.style.borderBottom = "2px solid transparent";
        e.target.style.border = "none";
        document.querySelector(".success").innerHTML = "";
    }
    if (e.target.value.length < 8) {
        form.style.borderBottom = "2px solid red";
        e.target.style.border = "1px solid red";
        error.innerHTML = "Password should be 8 character long";
        document.querySelector(".success").innerHTML = "";
    }
});
confirm_password.addEventListener("input", (confirm_password) => {
    if (password.value !== " ") {
        if (passwordPattern.test(confirm_password.target.value)) {
            confirm_password.target.style.border = "1px solid green";
            form.style.borderBottom = "2px solid green";
            error.innerHTML = "";
            document.querySelector(".success").innerHTML =
                "Form Ready to be submitted";
        }
        if (confirm_password.target.value !== password.value) {
            confirm_password.target.style.border = "1px solid red";
            form.style.borderBottom = "2px solid red";
            error.innerHTML = "Password does not match";
            document.querySelector(".success").innerHTML =
                "";
        }

        if (confirm_password.target.value === "") {
            error.innerHTML = "";
            form.style.borderBottom = "2px solid transparent";
            confirm_password.target.style.border = "none";
            document.querySelector(".success").innerHTML = "";
        }
    }
});

//CLICK EVENT ON FORM SUBMIT

submitBtn.addEventListener('click', (submit) => {
    submit.preventDefault();

    if (fname.value === "" || lname.value === " " || email.value === "" || password.value === " " || confirm_password.value === '') {
        error.innerHTML = "All field are required";
    } else {
        error.innerHTML = "";
    }
});