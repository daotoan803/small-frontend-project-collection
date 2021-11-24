const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const output = document.querySelector("#output");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const decimalBtn = document.querySelector("#decimal-btn");
const oppositeBtn = document.querySelector("#opposite-btn");

const calculator = new Calculator(output);

numBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculator.inputValue(e.target.textContent);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculator.setOperator(e.target.textContent);
  });
});

oppositeBtn.addEventListener("click", calculator.changeToOppositeValue);

decimalBtn.addEventListener("click", calculator.addDecimal);

equalBtn.addEventListener("click", calculator.calculate);

clearBtn.addEventListener("click", calculator.clear);
