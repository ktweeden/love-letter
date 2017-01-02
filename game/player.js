const _ = require('lodash')

class Player {
  constructor(number) {
    this._hand = []
    this._discardPile = []
    this._playerId = number
    this._playing = true
    // TODO make function which discards hand when playing is set to false
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

  mostRecentlyPlayedCard() {
    return _.last(this._discardPile)
  }

  removeCardFromHand(cardToRemove) {
    this._hand = _.reject(this._hand, card => card === cardToRemove)
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
