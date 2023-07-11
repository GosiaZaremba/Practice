const calculatorButtons = document.querySelector(
  ".calculator-container"
).children;
const calculatorInput = document.querySelector("#calculator-input");
const resultOutput = document.querySelector("#calculator-output");
let inputValue = calculatorInput.value;
let a = 0;
let b = 0;
let operand = "";
let result = "";

//////////////////////////////////////////

function onbuttonPress(event) {
  calculatorInput.value += event.target.innerHTML;
}

function clear() {
  calculatorInput.value = "";
  resultOutput.value = "";
}

function calculate() {
  result = eval(calculatorInput.value);
  resultOutput.setAttribute("value", result);
}

/////////////////////////////////////////

calculatorButtons[0].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[1].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[2].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[3].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[4].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[5].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[6].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[7].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[8].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[9].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[10].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[11].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[12].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[13].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[14].addEventListener("click", calculate);
calculatorButtons[15].addEventListener("click", () => onbuttonPress(event));
calculatorButtons[16].addEventListener("click", clear);
