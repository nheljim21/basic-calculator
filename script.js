let display = document.getElementById('display');
let current = '';

function press(value) {
  current += value;
  display.value = current;
}

function calculate() {
  try {
    // Evaluate the expression
    display.value = eval(current);
    current = '';
  } catch {
    display.value = 'Error';
    current = '';
  }
}

function clearDisplay() {
  current = '';
  display.value = '';
}
