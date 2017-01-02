
class Card {
  get name() {
    return this._name
  }

  get value() {
    return this._value
  }

  get requiresTarget() {
    return this._requiresTarget
  }

  playEffect(game, currentPlayer) {}
}

class Princess extends Card {
  constructor() {
    super()
    this._name = 'Princess'
    this._value = 8
    this._requiresTarget = false
  }

  playEffect(game, currentPlayer) {
    currentPlayer.playing = false
  }

}


class Countess extends Card {
  constructor() {
    super()
    this._name = 'Countess'
    this._value = 7
    this._requiresTarget = false
  }

}

class King extends Card {
  constructor() {
    super()
    this._name = 'King'
    this._value = 6
    this._requiresTarget = true
  }

  playEffect(game, currentPlayer, targetPlayer) {
    targetPlayer.addCardToHand(currentPlayer.hand.pop())
    currentPlayer.addCardToHand(targetPlayer.removeCardFromHand(targetPlayer.hand[0]))
  }
}

class Prince extends Card {
  constructor() {
    super()
    this._name = 'Prince'
    this._value = 5
    this._requiresTarget = true
  }

  playEffect(game, currentPlayer, targetPlayer) {
    const targetHand = targetPlayer.hand[0]
    targetPlayer.discardCard(targetHand)
    if (targetHand.name === 'Princess') {
      targetPlayer.playing = false
    } else { targetPlayer.addCardToHand(game.gameDeck.removeTopCard()) }
    // TODO what happens if there are no cards left?
  }
}

class Handmaid extends Card {
  constructor() {
    super()
    this._name = 'Handmaid'
    this._value = 4
    this._requiresTarget = false
  }
  // TODO check on playeffect is targetPlayer has Handmaid as top card
}

class Baron extends Card {
  constructor() {
    super()
    this._name = 'Baron'
    this._value = 3
    this._requiresTarget = true
  }

  playEffect(game, currentPlayer, targetPlayer) {
    if (targetPlayer.hand[0].value > currentPlayer.hand[0].value) {
      currentPlayer.playing = false
    } else { targetPlayer.playing = false }
  }
}

class Priest extends Card {
  constructor() {
    super()
    this._name = 'Priest'
    this._value = 2
    this._requiresTarget = true
  }

  playEffect(game, currentPlayer, targetPlayer) {
    console.log(targetPlayer.hand[0])
  }

}

class Guard extends Card {
  constructor() {
    super()
    this._name = 'Guard'
    this._value = 1
    this._requiresTarget = true
  }

  playEffect(game, currentPlayer, targetPlayer) {
    const guess = 'Priest'
    if (guess === targetPlayer.hand[0].name) {
      targetPlayer.playing = false
    }
  }

}


module.exports = {
  Princess,
  Countess,
  King,
  Prince,
  Handmaid,
  Baron,
  Priest,
  Guard,
}
