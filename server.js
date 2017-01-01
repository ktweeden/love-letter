const Game = require('./game/game.js')

let numberOfPlayers = 4
const newGame = new Game(numberOfPlayers)
newGame.playerList.forEach(player => {
  console.log(`before playing the player's hand is ${JSON.stringify(player.hand)}`)
  newGame.playerTurn(player)
  console.log(`after playing the player's hand is ${JSON.stringify(player.hand)}`)
})
