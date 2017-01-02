const Game = require('./game/game.js')

const numberOfPlayers = 4
const newGame = new Game(numberOfPlayers)

let endgame = false
// game play loop
while (endgame === false) {
  for (const player of newGame.playerList) {
    // Check player is still playing
    if (player.playing !== false) {
      // play a turn
      newGame.playerTurn(player)
    }
    console.log(`The deck is ${newGame.gameDeck.listOfCards.length} cards long`)

    // stop play when playdeck is depleated
    if (newGame.gameDeck.listOfCards.length === 0) {
      endgame = true
      break
    }
  }
}
