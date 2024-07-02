function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert('Please enter both weight and height.');
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    displayResult(bmi);
}

function displayResult(bmi) {
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = 'Your BMI is: ' + bmi;

    var interpretation = getInterpretation(bmi);
    resultContainer.innerHTML += '<br>' + interpretation;
}

function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
