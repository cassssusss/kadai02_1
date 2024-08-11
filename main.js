let expression = '';
let nowDisplayed = false; 

function appendNumber(number) {
    if (nowDisplayed) {
        expression = '';
        nowDisplayed = false;
    }
    if (number === '0' && expression === '0') return;
    if (number === '00' && expression === '') return;
    let lastNumber = expression.split(/[\+\-\*\/]/).pop();
    if (number === '.' && lastNumber.includes('.')) return;
    expression += number;
    updateDisplay();
}

function performOperation(op) {
    if (nowDisplayed) {
        nowDisplayed = false;
    }
    if (isNaN(expression.slice(-1))) {
        expression = expression.slice(0, -1) + op;
    } else {
        expression += op;
    }
    
    updateDisplay();
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        nowDisplayed = true;
    } catch {
        expression = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}

function resetCalculator() {
    expression = '';
    nowDisplayed = false;
    updateDisplay();
}