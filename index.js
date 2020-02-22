// Import stylesheets
import './style.css';

// Write Javascript code!
const add_button = document.getElementById('add');
const subt_button = document.getElementById('subtract');
const mult_button = document.getElementById('multiply');
const divi_button = document.getElementById('divide');
const num1_hopper = document.getElementById('num1');
const num2_hopper = document.getElementById('num2');
const output_hopper = document.getElementById('output')

add_button.addEventListener('click', (event) => {
  const num1 = +num1_hopper.value;
  const num2 = +num2_hopper.value;
  const output = num1 + num2;
  output_hopper.innerText = output;
});
