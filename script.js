const GameBoard = (() => {
  let board = Array.from({ length: 5 }, () => null);
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return {
    board,
    winningCombination
  }

})();

function GameLogic(gameBoard) {
  let playerX = Player("X", "x");
  let playerO = Player("O", "o");
  let currentPlayer = playerX
  let game = gameBoard;

  function makeMove(position) {
    game.board[position] = position;
    currentPlayer.moves.push(position);
    if (checkWin()) {
      console.log(`${currentPlayer.name} wone`)

    } else {
      currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }
  }

  function checkWin() {
    if (currentPlayer.moves.length != 3) return false
    currentPlayer.moves.sort();
    for (let i = 0; i < game.winningCombination.length; i++) {
      for (let j = 0; j < game.winningCombination[i].length; j++) {
        if (game.winningCombination[i][j] !== currentPlayer.moves[j])
          return false
      }
      return true
    }
  }

  // game state
  // current player
  // winner

  //game logic methods
  // update
  // restart
  // draw

  return {
    makeMove,
    currentPlayer,
    playerX, playerO
  }
}

function Player(name, symbol) {
  return {
    name,
    symbol,
    moves: [],
    setName(newName) { this.name = newName },
  }
}


let newGame = GameLogic(GameBoard)

newGame.makeMove(0)
newGame.makeMove(3)
newGame.makeMove(2)
newGame.makeMove(5)
newGame.makeMove(1)
