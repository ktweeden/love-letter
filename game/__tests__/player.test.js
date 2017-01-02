const Player = require('../player.js')
const cards = require('../cards.js')

test('removeCardFromHand removes the correct card', () => {
  const testPlayer = new Player()
  const princessCard = new cards.Princess()
  const guardCard = new cards.Guard()
  testPlayer.addCardToHand(princessCard)
  testPlayer.addCardToHand(guardCard)
  testPlayer.removeCardFromHand(guardCard)
  expect(testPlayer.hand[0]).toBe(princessCard)
  expect(testPlayer.hand.length).toBe(1)
})
