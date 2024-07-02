document.addEventListener("DOMContentLoaded", function () {
    const trackBtn = document.getElementById("trackBtn");
    const progressList = document.getElementById("progressList");

    trackBtn.addEventListener("click", function () {
        const weightInput = document.getElementById("weightInput").value;

        if (weightInput) {
            const weight = parseFloat(weightInput);
            const date = new Date().toLocaleDateString();
            const listItem = document.createElement("div");
            listItem.innerHTML = <p>Date: ${date}, Weight: ${weight} kg</p>;
            progressList.appendChild(listItem);
        } else {
            alert("Please enter your weight.");
        }
    });
});