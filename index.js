// Import stylesheets
import "./style.css";

function calculate(num1, operator, num2) {
  if (operator === "divide") {
    return num1 / num2;
  } else if (operator === "multiply") {
    return num1 * num2;
  } else if (operator === "add") {
    return num1 + num2;
  } else if (operator === "subtract") {
    return num1 - num2;
  } else if (operator === "square root") {
    if (num1 === 0) {
      return "err";
    }
    return Math.pow(num2, 1 / num1);
  } else if (operator === "pow") {
    return Math.pow(num1, num2);
  } else if (operator === "percentof") {
    return num1 / 100;
  } else if (operator === "inverse") {
    return 1 / num1;
  } else if (operator === "negativreciprocol") {
    return -1(1 / num1);
  } else if (operator === "absolutevalue") {
    return;
  }
}

function firstCalculator() {
  // Write Javascript code!
  const calculatora = document.getElementById("calculatora");
  const buttons = Array.from(calculatora.querySelectorAll("button"));
  const num1_input = document.getElementById("num1");
  const num2_input = document.getElementById("num2");
  const output_input = document.getElementById("output");

  buttons.forEach(button => {
    button.addEventListener("click", event => {
      const num1 = +num1_input.value;
      const num2 = +num2_input.value;
      const output = calculate(
        num1,
        event.target.getAttribute("aria-label"),
        num2
      );
      output_input.innerText = output;
    });
  });
}
firstCalculator();

function secondCalculator() {
  let memory = 0;
  const calculator = document.getElementById("calculatore");
  const buttons = Array.from(calculator.querySelectorAll("button"));
  const num_input = document.getElementById("num");
  const output_input = document.getElementById("outpute");

  buttons.forEach(button => {
    button.addEventListener("click", event => {
      const num = +num_input.value;
      const output = calculate(
        num,
        event.target.getAttribute("aria-label"),
        memory
      );
      memory = output;
      num_input.value = ""
      output_input.innerText = output;
    });
  });
}

secondCalculator();
