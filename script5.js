document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");

    calculateBtn.addEventListener("click", function () {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const age = parseFloat(document.getElementById("age").value);
        const gender = document.getElementById("gender").value;

        if (isNaN(weight) || isNaN(height) || isNaN(age)) {
            alert("Please fill in all fields with valid numbers.");
        } else {
            const bodyFatPercentage = calculateBodyFatPercentage(weight, height, age, gender);
            displayResult(bodyFatPercentage);
        }
    });

    function calculateBodyFatPercentage(weight, height, age, gender) {
        let bodyFatPercentage = 0;
        if (gender === "male") {
            bodyFatPercentage = 0.5 * weight - 0.02 * weight * age + 1.3 * height - 18;
        } else if (gender === "female") {
            bodyFatPercentage = 0.5 * weight - 0.02 * weight * age + 1.3 * height - 5.4;
        }
        return bodyFatPercentage.toFixed(2);
    }

    function displayResult(bodyFatPercentage) {
        const resultElement = document.getElementById("result");

        resultElement.textContent = `Your estimated body fat percentage is ${bodyFatPercentage}%.`;

        let interpretation = "";

        if (bodyFatPercentage < 10) {
            interpretation = "Your body fat percentage is very low.";
        } else if (bodyFatPercentage >= 10 && bodyFatPercentage < 20) {
            interpretation = "Your body fat percentage is in the healthy range.";
        } else if (bodyFatPercentage >= 20 && bodyFatPercentage < 25) {
            interpretation = "Your body fat percentage is slightly above average.";
        } else if (bodyFatPercentage >= 25 && bodyFatPercentage < 30) {
            interpretation = "Your body fat percentage is above average.";
        } else {
            interpretation = "Your body fat percentage is high.";
        }

        resultElement.insertAdjacentHTML('beforeend', `<p>${interpretation}</p>`);
    }
});
