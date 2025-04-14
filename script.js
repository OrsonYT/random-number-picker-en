const rouletteDiv = document.getElementById('roulette');
const lancerBtn = document.getElementById('lancer');
const resetBtn = document.getElementById('reset');
const maxNumberInput = document.getElementById('maxNumber');

let availableNumbers = [];

function initializeList(max) {
  availableNumbers = [];
  for (let i = 0; i <= max; i++) {
    availableNumbers.push(i);
  }
}

function pickUniqueNumber() {
  if (availableNumbers.length === 0) {
    rouletteDiv.textContent = "🎉 All numbers have been drawn!";
    rouletteDiv.style.backgroundColor = "#dff0d8";
    rouletteDiv.style.color = "#27ae60";
    return;
  }

  let interval = setInterval(() => {
    const random = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    rouletteDiv.textContent = random;
  }, 80);

  setTimeout(() => {
    clearInterval(interval);
    const index = Math.floor(Math.random() * availableNumbers.length);
    const final = availableNumbers.splice(index, 1)[0];
    rouletteDiv.textContent = final;
    rouletteDiv.style.backgroundColor = '#ffe6cc';
    rouletteDiv.style.color = '#d35400';
  }, 3000);
}

lancerBtn.addEventListener('click', () => {
  const max = parseInt(maxNumberInput.value);
  if (isNaN(max) || max < 1) {
    rouletteDiv.textContent = "⚠️ Please enter a valid number.";
    rouletteDiv.style.backgroundColor = "#ffcccc";
    rouletteDiv.style.color = "#c0392b";
    return;
  }

  if (availableNumbers.length === 0) {
    initializeList(max);
  }

  rouletteDiv.style.backgroundColor = "#fef9f1";
  rouletteDiv.style.color = "#e74c3c";
  pickUniqueNumber();
});

resetBtn.addEventListener('click', () => {
  const max = parseInt(maxNumberInput.value);
  if (isNaN(max) || max < 1) {
    rouletteDiv.textContent = "⚠️ Please enter a max number first.";
    rouletteDiv.style.backgroundColor = "#ffcccc";
    rouletteDiv.style.color = "#c0392b";
    return;
  }
  initializeList(max);
  rouletteDiv.textContent = "🔄 Reset! Ready to start again.";
  rouletteDiv.style.backgroundColor = "#fff3cd";
  rouletteDiv.style.color = "#856404";
});
