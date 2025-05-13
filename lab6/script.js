const boardSize = 5;
const board = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timeDisplay = document.getElementById('time');
let moves = 0;
let time = 0;
let interval;
let presets = [];
let lastRandomGrid = null;
let currentPreset = null;

fetch('presets.json')
  .then(res => res.json())
  .then(data => {
    presets = data.presets;
    loadPreset(presets[0]); 
  });

function loadPresetByName(name) {
  const preset = presets.find(p => p.name === name);
  if (preset) {
    loadPreset(preset);
  }
}

function loadPreset(preset) {
  clearInterval(interval);
  moves = 0;
  time = 0;
  movesDisplay.textContent = 'Кроків: 0';
  timeDisplay.textContent = 'Час: 00:00';
  board.innerHTML = '';

  currentPreset = JSON.parse(JSON.stringify(preset));

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      const index = row * boardSize + col;
      cell.classList.add('cell');
      cell.classList.add(preset.grid[row][col] === 1 ? 'on' : 'off');
      cell.addEventListener('click', () => toggleCell(index));
      board.appendChild(cell);
    }
  }

  document.getElementById('target')?.remove();
  const targetInfo = document.createElement('p');
  targetInfo.id = 'target';
  targetInfo.textContent = 'Мін. кількість кроків: ' + preset.target;
  document.querySelector('.info').appendChild(targetInfo);

  startTimer();
}

function toggleCell(index) {
  const cells = document.querySelectorAll('.cell');
  const row = Math.floor(index / boardSize);
  const col = index % boardSize;

  function flip(r, c) {
    if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
      const i = r * boardSize + c;
      cells[i].classList.toggle('on');
      cells[i].classList.toggle('off');
    }
  }

  flip(row, col);
  flip(row - 1, col);
  flip(row + 1, col);
  flip(row, col - 1);
  flip(row, col + 1);

  moves++;
  movesDisplay.textContent = 'Кроків: ' + moves;

  if (checkWin()) {
    clearInterval(interval);
    setTimeout(() => {
      alert('🎉 Вітаю! Ви вимкнули всі світла за ' + moves + ' кроків.');
    }, 200);
  }
}

function checkWin() {
  const cells = document.querySelectorAll('.cell');
  return Array.from(cells).every(cell => cell.classList.contains('off'));
}

function startTimer() {
  interval = setInterval(() => {
    time++;
    const min = Math.floor(time / 60).toString().padStart(2, '0');
    const sec = (time % 60).toString().padStart(2, '0');
    timeDisplay.textContent = 'Час: ' + min + ':' + sec;
  }, 1000);
}

function generateRandomPreset() {
  let newGrid;
  do {
    newGrid = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(Math.random() < 0.5 ? 0 : 1);
      }
      newGrid.push(row);
    }
  } while (JSON.stringify(newGrid) === JSON.stringify(lastRandomGrid));

  lastRandomGrid = newGrid;

  const randomPreset = {
    name: 'Random',
    target: '?',
    grid: newGrid
  };

  loadPreset(randomPreset);
}

function restartCurrentPreset() {
  if (currentPreset) {
    loadPreset(currentPreset);
  }
}

