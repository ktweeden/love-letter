const cards = require("./cards.js")
const pack = require("./pack.json")

class Deck {
  constructor(){
    this.listOfCards = []
    pack.forEach((type) => {
      for(let i=0; i < type.cardCount; i++) {
        this.listOfCards.push(new cards[type.name]())
      }
    })
  }



}

module.exports = Deck
