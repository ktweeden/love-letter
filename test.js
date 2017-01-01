const cards = require("./game/cards.js")
const Game = require("./game/game.js")

const newGame = new Game(2)

console.log(JSON.stringify(newGame.playerList))
