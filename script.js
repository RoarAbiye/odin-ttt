import { GameLogic } from "./logic.js"


let newGame = GameLogic()

newGame.makeMove(0)
newGame.makeMove(2)
newGame.makeMove(1)
newGame.makeMove(3)
newGame.makeMove(4)
newGame.makeMove(6)
newGame.makeMove(5)
newGame.makeMove(7)
newGame.makeMove(8)
console.log("expect draw")
newGame.makeMove(8)
