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
            return add(leftOperand, rightOperand);
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

const container = document.querySelector("#container");
const calcNums = document.querySelector("#calc-nums");

let leftOperand;
let operator;
let rightOperand;
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

for (let num of nums) {
    const numBtn = document.createElement("button");
    numBtn.classList.add("btn");
    numBtn.classList.add(`btn-${num}`);
    numBtn.textContent = num;
    calcNums.appendChild(numBtn);
}