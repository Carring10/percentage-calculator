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

numberInput.onkeydown = function(event){
    if (event.key === 'Enter') {
        calculatePercentage();        
    }
}

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

secondNumberInput.onkeydown = function(event){
    if (event.key === 'Enter') {
        calculatePercentageOfNumber();        
    }
}

const btn4 = document.getElementById('btn-4');
const newValueInput = document.querySelector('.new-value');

function calculateIncreaseDecrease() {
    const newValue = parseFloat(document.querySelector('.new-value').value);
    const oldValue = parseFloat(document.querySelector('.old-value').value);

    const percentChange = (newValue - oldValue) / (oldValue) * 100;
    document.getElementById('percentChangeResult').value = percentChange + "%";
}

btn4.addEventListener('click', calculateIncreaseDecrease);

newValueInput.onkeydown = function(event){
    if (event.key === 'Enter') {
        calculateIncreaseDecrease();        
    }
}