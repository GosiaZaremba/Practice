const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const form = document.forms[0];
const formInputs = Array.from(form.elements);
const submitButton = document.getElementById("Send-message-Button");

const txtRegEx = /[A-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,}/gimu;
const emailRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validate(element, rule) {
  if (!element.value.trim("").match(rule) && element.value.trim("") === "") {
    element.classList.add("form-error");
    return false;
  } else {
    element.classList.remove("form-error");
    return true;
  }
}

function sendForm(e) {
  validate(fullName, txtRegEx) &&
  validate(email, emailRegEx) &&
  validate(message, txtRegEx)
    ? console.log(fullName.value, email.value, message.value)
    : console.log("Form is not valid.");
  e.preventDefault();
}

submitButton.addEventListener("click", sendForm);

fullName.addEventListener("blur", () => {
  validate(fullName, txtRegEx);
});

email.addEventListener("blur", () => {
  validate(email, emailRegEx);
});

message.addEventListener("blur", () => {
  validate(message, txtRegEx);
});
