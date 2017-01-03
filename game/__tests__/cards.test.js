const cards = require('../cards.js')
const Game = require('../game.js')

test('guard playEffect sets target player .playing to false if guess is correct', () => {
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

test('baron playEffect sets player with lowest card value to false', () => {
  const testGame = new Game(4)
  const player1 = testGame.playerById(1)
  const player2 = testGame.playerById(2)
  const player3 = testGame.playerById(3)
  const player4 = testGame.playerById(4)
  const baronCard = new cards.Baron()
  player1._hand = [new cards.Guard()]
  player2._hand = [new cards.Priest()]
  player3._hand = [new cards.Countess()]
  player4._hand = [new cards.Princess()]
  baronCard.playEffect(testGame, player1, player2)
  baronCard.playEffect(testGame, player4, player3)
  expect(player1.playing).toBe(false)
  expect(player2.playing).toBe(true)
  expect(player3.playing).toBe(false)
  expect(player4.playing).toBe(true)
})
