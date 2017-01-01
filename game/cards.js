
class Card {
  get name() {
    return this._name
  }

  get value() {
    return this._value
  }

  playEffect(){}
}

class Princess extends Card {
  constructor() {
    super()
    this._name = "Princess"
    this._value = 8
  }

}


class Countess extends Card {
  constructor() {
    super()
    this._name = "Countess"
    this._value = 7
  }
}

class King extends Card {
  constructor() {
    super()
    this._name = "King"
    this._value = 6
  }

}

class Prince extends Card {
  constructor() {
    super()
    this._name = "Prince"
    this._value = 5
  }

}

class Handmaid extends Card {
  constructor() {
    super()
    this._name = "Handmaid"
    this._value = 4
  }

}

class Baron extends Card {
  constructor() {
    super()
    this._name = "Baron"
    this._value = 3
  }

}

class Priest extends Card {
  constructor() {
    super()
    this._name = "Priest"
    this._value = 2
  }

}

class Guard extends Card {
  constructor() {
    super()
    this._name = "Guard"
    this._value = 1
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
