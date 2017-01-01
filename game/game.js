const Card = require("./cards.js")
const Player = require("./player.js")
const Deck = require("./deck.js")

class Game {
  constructor(playerNumber){
    this.playerList = []
    for(let i=0; i < playerNumber; i++) {
      this.playerList.push(new Player())
    }

    const gameDeck = new Deck()
    //shuffle cards
    gameDeck.shuffleDeck()
    //discard a card
    gameDeck.listOfCards.pop()
    //deal one card per player
    this.playerList.forEach(player =>{
      player.addCardToHand(gameDeck.listOfCards.pop())
    })
  }
}


module.exports = Game
