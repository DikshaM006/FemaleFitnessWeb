document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calc-form');
    const results = document.getElementById('results');
    const errors = document.getElementById('form-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset previous results and errors
        results.innerHTML = '';
        errors.innerHTML = '';
        results.style.display = 'none';
        errors.style.display = 'none';

        // Retrieve form values
        const age = parseFloat(form.age.value);
        const gender = form.gender.value;
        const height = parseFloat(form.height.value);
        const weight = parseFloat(form.weight.value);

        // Validate form inputs
        if (isNaN(age) || isNaN(height) || isNaN(weight)) {
            errors.innerHTML = 'Please enter valid numeric values for age, height, and weight.';
            errors.style.display = 'block';
            return;
        }

        // Perform calorie calculation based on gender
        let calories;
        if (gender === 'Female') {
            calories = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        } else {
            calories = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }

        // Display the calculated calories
        results.innerHTML = `Your daily calorie intake should be approximately: <strong>${calories.toFixed(2)} calories</strong>`;
        results.style.display = 'block';
    });
});
