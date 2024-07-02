document.addEventListener("DOMContentLoaded", function () {
    const trackBtn = document.getElementById("trackBtn");

    trackBtn.addEventListener("click", function () {
        const weightInput = document.getElementById("weight").value;
        const bodyFatPercentageInput = document.getElementById("bodyFatPercentage").value;

        if (weightInput && bodyFatPercentageInput) {
            const weight = parseFloat(weightInput);
            const bodyFatPercentage = parseFloat(bodyFatPercentageInput);

            const leanBodyMass = calculateLBM(weight, bodyFatPercentage);
            displayProgress(leanBodyMass);
        } else {
            alert("Please fill in both weight and body fat percentage fields.");
        }
    });

    function calculateLBM(weight, bodyFatPercentage) {
        const bodyFatDecimal = bodyFatPercentage / 100;
        return weight * (1 - bodyFatDecimal);
    }

    function displayProgress(leanBodyMass) {
        const progressResult = document.getElementById("progressResult");
        progressResult.textContent = `Your lean body mass is ${leanBodyMass.toFixed(2)} kg.`;
    }
});
