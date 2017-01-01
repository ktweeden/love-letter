const Card = require('./cards.js')
const Player = require('./player.js')
const Deck = require('./deck.js')

class Game {
  constructor(playerNumber){
    this.playerList = []
    for(let i=0; i < playerNumber; i++) {
      this.playerList.push(new Player())
    }

    this.gameDeck = new Deck()
    //shuffle cards
    this.gameDeck.shuffleDeck()
    //discard a card
    this.gameDeck.removeTopCard()
    //deal one card per player
    this.playerList.forEach(player => {
      player.addCardToHand(this.gameDeck.removeTopCard())
    })
  }

  playerTurn(player) {
    //pick the top card from the deck
    player.addCardToHand(this.gameDeck.removeTopCard())
    console.log(`during playing the player's hand is ${JSON.stringify(player.hand)}`)
    //choose a card to play
    const playerSelection = player.hand[Math.floor(Math.random()*2)]
    //add that card to the player discard pile
    player.discardCard(playerSelection)
    //execute card action
    playerSelection.playEffect()

  }

}


module.exports = Game
