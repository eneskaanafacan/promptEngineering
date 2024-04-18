// script.js
document.addEventListener('DOMContentLoaded', function() {
  const squares = document.querySelectorAll('.square');
  const status = document.querySelector('.status');
  const playAgainBtn = document.querySelector('.play-again');

  let currentPlayer = 'X';
  let gameState = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleSquareClick(index) {
    if (gameState[index] === '' && gameActive) {
      gameState[index] = currentPlayer;
      squares[index].textContent = currentPlayer;
      
      if (checkWin()) {
        status.textContent = `Player ${currentPlayer} wins!`;
        status.classList.add('winning-message');
        gameActive = false;
      } else if (checkDraw()) {
        status.textContent = "It's a draw!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
      }
    }
  }

  function checkWin() {
    return winningConditions.some(condition => {
      return condition.every(index => {
        return gameState[index] === currentPlayer;
      });
    });
  }

  function checkDraw() {
    return gameState.every(square => square !== '');
  }

  function resetGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`;
    status.classList.remove('winning-message');
    squares.forEach(square => square.textContent = '');
  }

  squares.forEach(square => {
    square.addEventListener('click', function() {
      const index = parseInt(square.dataset.index);
      handleSquareClick(index);
    });
  });

  playAgainBtn.addEventListener('click', function() {
    resetGame();
  });
});
