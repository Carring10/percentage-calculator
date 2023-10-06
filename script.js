const percentInput = document.querySelector('.percent-input');
const numberInput = document.querySelector('.number-input');
const calculateBtn = document.querySelector('.calculate-btn');
const resultSpan = document.getElementById('result');

function calculatePercentage() {
    const percentValue = parseFloat(percentInput.value);
    const numberValue = parseFloat(numberInput.value);

    const result = (percentValue / 100) * numberValue;

    resultSpan.textContent = result;
}

calculateBtn.addEventListener('click', calculatePercentage);