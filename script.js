// Function to calculate the percentage
const percentInput = document.querySelector('.percent-input');
const numberInput = document.querySelector('.number-input');
const btn1 = document.getElementById('btn-1');
const resultSpan = document.getElementById('result');

function calculatePercentage() {
    const percentValue = parseFloat(percentInput.value);
    const numberValue = parseFloat(numberInput.value);

    const result = (percentValue / 100) * numberValue;

    resultSpan.value = result;
}

btn1.addEventListener('click', calculatePercentage);

// Function to find the percentage of 2 numbers
const firstNumberInput = document.querySelector('.first-number-input');
const secondNumberInput = document.querySelector('.second-number-input');
const btn2 = document.getElementById('btn-2');
const percentageResultSpan = document.getElementById('percentageResult');

function calculatePercentageOfNumber() {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);

    const percentage = (firstNumber / secondNumber) * 100;

    percentageResultSpan.value = percentage + "%";
}

btn2.addEventListener('click', calculatePercentageOfNumber);

const firstNumberDifferenceInput = document.querySelector('.first-number-difference-input');
const secondNumberDifferenceInput = document.querySelector('.second-number-difference-input');
const btn3 = document.getElementById('btn-3');
const percentDifferenceResultSpan = document.getElementById('percentDifferenceResult');

function calculatePercentDifference() {
    const firstNumberDifferenceInputValue = parseFloat(firstNumberDifferenceInput.value);
    const secondNumberDifferenceInputValue = parseFloat(secondNumberDifferenceInput.value);

    const percentDifference = Math.abs((firstNumberDifferenceInputValue - secondNumberDifferenceInputValue)) / (firstNumberDifferenceInputValue + secondNumberDifferenceInputValue) / 2 * 100;

    percentDifferenceResultSpan.value = percentDifference + "%";
}

btn3.addEventListener('click', calculatePercentDifference);