const _ = require('lodash')

class Player {
  constructor(number) {
    this._hand = []
    this._discardPile = []
    this._playerId = number
    this._playing = true
  }

  get hand() {
    return this._hand
  }

  get discardPile() {
    return this._discardPile
  }

  get playerId() {
    return this._playerId
  }

  get playing() {
    return this._playing
  }

  set playing(status) {
    if (_.isBoolean(status)) {
      this._playing = status
    }
  }

  removeCardFromHand(cardToRemove) {
    const newHand = []
    for (const card of this._hand) {
      if (card !== cardToRemove) {
        newHand.push(cardToRemove)
      }
    }
    this._hand = newHand
  }

  addCardToHand(card) {
    this._hand.push(card)
  }

  discardCard(card) {
    this.removeCardFromHand(card)
    this._discardPile.push(card)
  }

}

module.exports = Player
