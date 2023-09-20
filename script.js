
import { GameLogic } from "./logic.js"



let newGame = GameLogic()

let boardElement = document.querySelector('.board')

let cells = newGame.createCell()

cells.forEach(cell => {
  boardElement.appendChild(cell)
})

