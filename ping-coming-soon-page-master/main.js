"use strict";;
const button = document.querySelector("#btn");

const email = document.querySelector("#input");

const erDisplayed = document.querySelector("#errorTextEmp");

const rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const data = {
    erEmpty: "Whoops!It looks like you forgot to add your email ",
    erValidation: "Please provide a valid email address",
}

const timeoutFunc = setInterval(function() {
    erDisplayed.textContent = "";
    email.classList.remove("active");
}, 5000);

button.addEventListener("click", function() {
    if (!email.value.match(rex)) {
        erDisplayed.textContent = data.erValidation;
        email.classList.add("active");
        return timeoutFunc;
    } else if (email.value == '') {
        erDisplayed.textContent = data.erEmpty;
        email.classList.add("active");
        return timeoutFunc;
    } else {
        alert("good job")
    }
    erDisplayed.textContent = "";
});