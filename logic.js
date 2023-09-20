import { GameBoard, Player } from "./board.js";

export function GameLogic() {
  let playerX = Player("X", "x");
  let playerO = Player("O", "o");
  let currentPlayer = playerX;
  let gameBoard = GameBoard();


  function makeMove(position) {

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

  if (gameBoard.isFull()) {
    gameBoard.rounds++
    console.log("draw")
    return
  }



  function createCell() {
    let cellList = []
    gameBoard.board.forEach((cell, index) => {
      let celeElement = document.createElement("div");
      celeElement.setAttribute("class", "cell nf");
      celeElement.setAttribute("id", index)
      cellList.push(celeElement)
      celeElement.addEventListener("click", () => {
        celeElement.textContent = currentPlayer.symbol
        makeMove(index)
      })
    })
    return cellList;
  }

  return {
    makeMove,
    createCell,
    currentPlayer,
    playerX, playerO
  }
}

