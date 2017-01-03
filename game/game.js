const Player = require('./player.js')
const Deck = require('./deck.js')
const _ = require('lodash')

class Game {
  constructor(playerNumber) {
    this._playerList = []
    for (let i = 0; i < playerNumber; i++) {
      this._playerList.push(new Player(i + 1))
    }

    this._gameDeck = new Deck()
    // shuffle cards
    this._gameDeck.shuffleDeck()
    // discard a card
    this._gameDeck.removeTopCard()
    // deal one card per player
    this._playerList.forEach((player) => {
      player.addCardToHand(this.gameDeck.removeTopCard())
    })
  }

  get gameDeck() {
    return this._gameDeck
  }

  get playerList() {
    return this._playerList
  }

  playerById(id) {
    return _.find(this.playerList, player => player.playerId === id)
  }

  playerTurn(player) {
    console.log(`before playing player ${player.playerId} hand is ${JSON.stringify(player.hand)}`)
    // pick the top card from the deck
    player.addCardToHand(this.gameDeck.removeTopCard())
    console.log(`during play the player ${player.playerId} hand is ${JSON.stringify(player.hand)}`)
    // choose a card to play
    const playerSelection = player.hand[Math.floor(Math.random() * 2)]
    // add that card to the player discard pile
    player.discardCard(playerSelection)
    console.log(`after playing the player ${player.playerId} hand is ${JSON.stringify(player.hand)}`)
    // execute card action
    if (playerSelection.requiresTarget === true) {
      console.log(`The player has selected ${JSON.stringify(playerSelection)}`)
      let targetPlayer = this.playerList[Math.floor(Math.random() * this.playerList.length)]
      console.log(`the target player is Player ${targetPlayer.playerId}`)
      // TODO this is a bad check (is it curent player, is it a player that's out, is Handmaid player)
      if (targetPlayer === player) {
        targetPlayer = this.playerList[Math.floor(Math.random() * this.playerList.length)]
      } else if (targetPlayer.mostRecentlyPlayedCard() !== undefined) {
        console.log(targetPlayer.mostRecentlyPlayedCard())
        if (targetPlayer.mostRecentlyPlayedCard().is('Handmaid')) {
          targetPlayer = this.playerList[Math.floor(Math.random() * this.playerList.length)]
        }
      }
      console.log(`the target player is Player ${targetPlayer.playerId}`)
      playerSelection.playEffect(this, player, targetPlayer)
    } else { playerSelection.playEffect(this, player) }
  }

}


module.exports = Game
