const cards = require('../cards.js')
const Game = require('../game.js')

test('guard playEffect sets target player to false is correct', () => {
  const testGame = new Game(3)
  const player1 = testGame.playerById(1)
  const player2 = testGame.playerById(2)
  const player3 = testGame.playerById(3)
  const guardCard = new cards.Guard()
  player2._hand = [new cards.Priest()]
  player3._hand = [new cards.Countess()]
  guardCard.playEffect(testGame, player1, player2)
  guardCard.playEffect(testGame, player1, player3)
  expect(player2.playing).toBe(false)
  expect(player3.playing).toBe(true)
})


// TODO make playerByID better. With Lodash!
