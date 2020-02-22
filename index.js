// Import stylesheets
import './style.css';

// Write Javascript code!
const buttons = Array.from(document.querySelectorAll('button'));
const num1_input = document.getElementById('num1');
const num2_input = document.getElementById('num2');
const output_input = document.getElementById('output')

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const num1 = +num1_input.value;
    const num2 = +num2_input.value;
    const output = calculate(num1, event.target.getAttribute('aria-label'), num2)
    output_input.innerText = output;
  });
});

function calculate( num1, operator, num2){
  if (operator === 'divide') {
    return num1 / num2;
  } else if (operator === 'multiply') {
    return num1 * num2;
  } else if (operator === 'add') {
    return num1 + num2;
  } else if (operator === 'subtract'){
    return num1 - num2;
  } else if (operator === 'square root'){
    if (num1 === 0){
      return 'err'
    }
    return Math.pow(num2, 1/num1);
  }

}
