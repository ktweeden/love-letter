const Game = require('./game/game.js')

let numberOfPlayers = 4
const newGame = new Game(numberOfPlayers)

let endgame = false
//game play loop
while (endgame === false) {
  for(const player of newGame.playerList) {
      newGame.playerTurn(player)
      console.log(`The deck is ${newGame.gameDeck.listOfCards.length} cards long`)
      if (newGame.gameDeck.listOfCards.length === 0){
        endgame = true
        break
      }
  }
}
