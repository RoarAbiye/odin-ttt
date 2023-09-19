export function GameBoard() {
  let board = Array.from({ length: 9 }, () => null);
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

  function isFull() {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        return false
      }
    }
    return true
  }

  function reset() {
    board = Array.from({ length: 9 }, () => null);
  }

  function checkWin(player) {
    if (player.moves.length != 3) return false
    player.moves.sort();
    for (let i = 0; i < winningCombination.length; i++) {
      for (let j = 0; j < winningCombination[i].length; j++) {
        if (winningCombination[i][j] !== player.moves[j])
          return false
      }
      return true
    }
  }

  return {
    board,
    winningCombination,
    rounds: 0,
    reset,
    checkWin,
    isFull
  }

};

export function Player(name, symbol) {
  return {
    name,
    symbol,
    moves: [],
    setName(newName) { this.name = newName },
  }
}
