'use strict'

let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener('click', (event) => {
        let operation = event.target.innerText;

        switch (operation) {
            case 'AC':
                clearNum();
                break;
            case '=':
                calculateResult();
                break;
            case '+':
                handleOperation('+');
                break;
            case '-':
                handleOperation('-');
                break;
            case '*':
                handleOperation('*');
                break;
            case '/':
                handleOperation('/');
                break;
            case '%':
                getPersent();
                break
            default:
                if (display.innerText === '0' && operation !== '.') {
                    display.innerText = operation;
                } else {
                    display.innerText += operation;
                }
        }
    });
});

function clearNum() {
    display.innerText = '0';
}

function calculateResult() {
    let expression = display.innerText;
    let operators = ['+', '-', '*', '/'];
    let operator = '';
    let operands = [];

    for (let op of operators) {
        if (expression.includes(op)) {
            operator = op;
            operands = expression.split(op);
            break;
        }
    }

    console.log(operands)

    if (operands.length !== 2) {
        display.innerText = 'ошибка';
        return;
    }

    const num1 = +(operands[0]);
    const num2 = +(operands[1]);

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Error';
    }

    display.innerText = result;
}

function handleOperation(operation) {
    const lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    display.innerText += operation;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    let multiply = 0;
    for (let i = 1; i <= b; i++) {
        multiply += a
    }
    return multiply
}

function divide(a, b) {
    if (b === 0) {
        return 'ошибка';
    }
    return a / b;
}

function getPersent() {
    let persent = display.innerText + '/100'
    display.innerText = eval(persent)
}



describe("summ", function() {
    it("2 + 2 будет 4", function() {
        assert.equal(add(2, 2),4);
    });
    
    it("multi", function() {
        assert.equal(multiply(2, 2), 5);
    });
});