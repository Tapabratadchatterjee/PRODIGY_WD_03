let currentPlayer = 'X';
let cells = Array.from(document.querySelectorAll('.cell'));
let gameStatus = document.getElementById('status');

function handleClick(index) {
  if (cells[index].innerText === '') {
    cells[index].innerText = currentPlayer;
    if (checkWinner(currentPlayer)) {
      gameStatus.innerText = `Player ${currentPlayer} wins!`;
      disableCells();
    } else if (checkDraw()) {
      gameStatus.innerText = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      gameStatus.innerText = `Next player: ${currentPlayer}`;
    }
  }
}

function checkWinner(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(index => cells[index].innerText === player);
  });
}

function checkDraw() {
  return cells.every(cell => cell.innerText !== '');
}

function disableCells() {
  cells.forEach(cell => cell.onclick = null);
}

function restart() {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.onclick = () => handleClick(cells.indexOf(cell));
  });
  currentPlayer = 'X';
  gameStatus.innerText = 'Next player: X';
}

  
