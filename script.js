'use strict'

function Game() {
  let playerX = Player('x');
  let playerO = Player('o');
  let currentPlayer = playerX;
  let winner = null;
  let over = false;
  let _board = Array.from(Array(9).keys());

  /** winnign combinations for tic tac toe game
   * e.g [0, 4, 8] will be 
   * x | o | o
   * ----------
   * o | x | o
   * ----------
   * x | o | x
    */
  let _winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  function makeMove(position) {
    if (_board[position] !== null) {
      currentPlayer.moves.push(position)
      _board[position] = currentPlayer.symbol;
      if (_chekForWinner(currentPlayer.moves)) {
        winner = currentPlayer
        over = true;
        currentPlayer.score += 1
        return;
      }
      _switchPlayer()
    }
    return
  };

  function _chekForWinner(moves) {
    for (let i = 0; i < _winningCombinations.length; i++) {
      if (moves.length !== _winningCombinations[i].length) {
        return false;
      }
    }

    _winningCombinations[i].sort()
    moves.sort();

    for (let j = 0; j < _winningCombinations.length; j++) {
      if (_winningCombinations[j][i] !== moves[j]) {
        return false
      }
    }
    return true
  }

  function _switchPlayer() {
    if (currentPlayer == playerO) {
      currentPlayer = playerX;
    }
    else {
      currentPlayer = playerO;
    }
  }


  return {
    makeMove,
    winner,
    playerX,
    playerO,
    currentPlayer,
    over
  }
}

function Player(symbol) {
  return {
    name: `Player ${symbol.toUpperCase()}`,
    symbol,
    moves: [],
    score: 0
  }
}

let game = Game();
console.table(game)
game.makeMove(5)
game.makeMove(3)
game.makeMove(2)

console.table(game.playerX)
console.table(game.playerO)
