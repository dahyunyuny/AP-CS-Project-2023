var cells = document.getElementsByClassName('cell');

var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Variable to keep track of the current player ('X' or 'O')
var currentPlayer = 'X';
var playerScore = 0;
var computerScore = 0;

// Get the audio element
var clickSound = new Audio('funny.wav');
var gameWinSound = new Audio('gamewin.wav');

// Add event listeners to the cells
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClick);
}

// Function to handle cell click
function cellClick() {
  // Check if it's the computer's turn
  if(currentPlayer === 'O'){
    return;
  }
  // Get the row and column index of the clicked cell
  var rowIndex = this.parentNode.rowIndex;
  var cellIndex = this.cellIndex;
  

  // Check if the clicked cell is empty
  if (board[rowIndex][cellIndex] === ' ') {
    // Update the cell value with the current player
    board[rowIndex][cellIndex] = currentPlayer;
    // Update the cell text with the current player
    this.textContent = currentPlayer;
    clickSound.play();

    // Check if the current player wins
    if (checkIfDone()) {
      if (checkIfDone() === 'draw') {
        alert('Draws!');
        var drawImage = document.createElement('img');
        drawImage.src = 'momo.png';
        drawImage.classList.add('image-popup');
        document.body.appendChild(drawImage);

        var sound = document.getElementById('laughsound');
        sound.play();

        setTimeout(function () {
          drawImage.parentNode.removeChild(drawImage);
        }, 3000);
      } else {
        alert('Player ' + currentPlayer + ' wins!');
        var drawImage2 = document.createElement('img');
        drawImage2.src = 'goodjobcat.png';
        drawImage2.classList.add('image-popup');
        document.body.appendChild(drawImage2);
        
        var sound = document.getElementById('laughsound');
        sound.play();

        setTimeout(function () {
          drawImage2.parentNode.removeChild(drawImage2);
        }, 3000);
        
        playerScore++;
      }
      
      // Reset the game
      resetGame();
    } else {
      // Switch to the next player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      
      if(currentPlayer === 'O'){
        // Remove event listeners temporarily
        for (var i = 0; i < cells.length; i++) {
          cells[i].removeEventListener('click', cellClick);
        }

        setTimeout(function () {
          makeComputerMove();
          // Add event listeners back
          for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', cellClick);
          }
        }, 2000);
      }
    }
  }
}

function makeComputerMove(){
  var availableCells = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === ' ') {
        availableCells.push({ row: i, col: j });
      }
    }
  }
  // Check if there are available cells
  if (availableCells.length > 0) {
    // Randomly choose one of the available cells
    var randomIndex = Math.floor(Math.random() * availableCells.length);
    var randomCell = availableCells[randomIndex];
    var rowIndex = randomCell.row;
    var cellIndex = randomCell.col;
    // Update the cell value with the current player
    board[rowIndex][cellIndex] = currentPlayer;
    // Update the cell text with the current player
    cells[rowIndex * 3 + cellIndex].textContent = currentPlayer;
    clickSound.play();
    // Check if the computer wins
    if (checkIfDone()) {
      if (checkIfDone() === 'draw') {
        alert('Draws!');
        var drawImage = document.createElement('img');
        drawImage.src = 'momo.png';
        drawImage.classList.add('image-popup');
        document.body.appendChild(drawImage);

        var sound = document.getElementById('laughsound');
        sound.play();

        setTimeout(function () {
          drawImage.parentNode.removeChild(drawImage);
        }, 3000);
      } else {
        alert('Player ' + currentPlayer + ' wins!');
        var drawImage3 = document.createElement('img');
        drawImage3.src = 'gameover.png';
        drawImage3.classList.add('image-popup');
        document.body.appendChild(drawImage3);
        
        var sound = document.getElementById('gameoversound');
        sound.play();

        setTimeout(function () {
          drawImage3.parentNode.removeChild(drawImage3);
        }, 3000);
        computerScore++;
      }
      // Reset the game
      resetGame();
    } else {
      // Switch to the next player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check if the game is finished
function checkIfDone() {
  // Check all possible winning combinations
  if (
    // Rows
    (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) ||
    (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) ||
    (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) ||
    // Columns
    (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) ||
    (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) ||
    (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) ||
    // Diagonals
    (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
  ) {
    return currentPlayer; // Player wins
  } else if(isBoardFull()){
      return 'draw';
  }
  return false; // Game continues
}
function isBoardFull() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === ' ') {
        return false; // Empty cell found, board is not full
      }
    }
  }
  return true;
}

// Function to reset the game
function resetGame() {
  // Clear the game board
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  // Clear the cell texts
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }

  // Reset the current player
  currentPlayer = 'X';
  
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}
