document.addEventListener('DOMContentLoaded', function() {
    const addWaterBtn = document.getElementById('addWaterBtn');
    const waterLevel = document.getElementById('waterLevel');
    let currentWaterLevel = 0; // in milliliters
    const maxCapacity = 4000; // in milliliters (4 liters)
  
    addWaterBtn.addEventListener('click', function() {
      if (currentWaterLevel < maxCapacity) {
        currentWaterLevel += 250;
        if (currentWaterLevel > maxCapacity) {
          currentWaterLevel = maxCapacity;
        }
        updateWaterLevel();
      } else {
        alert('Container is full!');
      }
    });
  
    function updateWaterLevel() {
      const percentageFull = (currentWaterLevel / maxCapacity) * 100;
      waterLevel.style.height = `${percentageFull}%`;
  
      // Change water color to blue when it reaches a certain level
      if (percentageFull >= 50) {
        waterLevel.style.backgroundColor = '#4d94ff'; // Blue color
      }
    }
  });
  