const cards = require('./cards.js')
const pack = require('./pack.json')
const _ = require('lodash')

class Deck {
  constructor() {
    this._listOfCards = []
    pack.forEach((type) => {
      for (let i = 0; i < type.cardCount; i++) {
        this._listOfCards.push(new cards[type.name]())
      }
    })
    console.log(this._listOfCards)
  }

  shuffleDeck() {
    this._listOfCards = _.shuffle(this.listOfCards)
    return this._listOfCards
  }

  get listOfCards() {
    return this._listOfCards
  }

  removeTopCard() {
    return this._listOfCards.pop()
  }

  isEmpty() {
    return this._listOfCards.length === 0
  }
}

module.exports = Deck
