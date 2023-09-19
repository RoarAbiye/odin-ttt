import { GameBoard, Player } from "./board.js";

export function GameLogic() {
  let playerX = Player("X", "x");
  let playerO = Player("O", "o");
  let currentPlayer = playerX;
  let gameBoard = GameBoard();


  function makeMove(position) {


    if (gameBoard.isFull()) {
      gameBoard.rounds++
      console.log("draw")
      return
    }

    gameBoard.board[position] = position;

    if (gameBoard.checkWin(currentPlayer)) {
      console.log(`${currentPlayer.name} wone`)
      gameBoard.rounds++
    }
    else {
      currentPlayer.moves.push(position);
      currentPlayer = currentPlayer === playerX ? playerO : playerX
      console.log(`${currentPlayer.name}'s turn`)
    }
  }

  return {
    makeMove,
    currentPlayer,
    playerX, playerO
  }
}

