function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(leftOperand, operator, rightOperand) {
    switch (operator) {
        case '+':
            add(leftOperand, rightOperand);
            break;
        case '-':
            substract(leftOperand, rightOperand);
            break;
        case '*':
            multiply(leftOperand, rightOperand);
            break;
        case '/':
            divide(leftOperand, rightOperand);
            break;
    }
}

let leftOperand;
let operator;
let rightOperand;