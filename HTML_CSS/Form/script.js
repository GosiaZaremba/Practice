// Variables
const form = document.forms[0];
const formInputs = Array.from(form.elements);

const txtRegEx = /[A-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]/gimu;
const phoneRegEx = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
const emailRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Callbacks

function validateText(element) {
  element.type === "text" && element.value.match(txtRegEx)
    ? console.log("txt ok")
    : console.log("Wypełnij poprawnie pola tekstowe");
}

function validateNumber(element) {
  element.type === "tel" && element.value.match(phoneRegEx)
    ? console.log("tel ok")
    : console.log("Wypełnij poprawnie pole z nr telefonu");
}

function validateEmail(element) {
  element.type === "email" && element.value.match(emailRegEx)
    ? console.log("email ok")
    : console.log("Wypełnij poprawnie pole z nr telefonu");
}

function validateAge(element) {
  element.type === "number" &&
  (element.valueAsNumber > 18 || element.valueAsNumber < 60)
    ? console.log("wiek ok")
    : console.log("Wypełnij poprawnie pole wiek");
}

function validateMarketingCheckbox(element) {
  element.type === "checkbox" && element.checked === true
    ? console.log("checkbox ok")
    : console.log("Wypełnij poprawnie marketing");
}

// Main functions

function onSubmit(e) {
  formInputs.forEach((element) => {
    validateText(element);
    validateNumber(element);
    validateEmail(element);
    validateAge(element);
    validateMarketingCheckbox(element);
  });
  e.preventDefault();
  console.log(e.target);
}

// Events

form.addEventListener("submit", onSubmit);
