const Card = require("./card.js")
const Player = require("./player.js")
const Deck = require("./deck.js")

class Game {
  constructor(playerNumber){
    const playerList = []
    for(let i=0; i <= playerNumber; i++) {
      playerList.push(new Player())
    }

    const gameDeck = new Deck()


  }
}
