
class Player {
  constructor(){
    this._hand = []
  }

  get hand() {
    return this._hand
  }

  removeCardFromHand(cardToRemove) {
    const newHand = []
    this.hand.forEach((card) => {
      if (card.name !== cardToRemove.name) {
        newHand.push(cardToRemove)
      }
    })

    this._hand = newHand
  }

  addCardToHand(card) {
    this._hand.push(card)
  }
}

module.exports = Player
