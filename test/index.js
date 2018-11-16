const LuckGuy = require('../src/luckyGuy.bs')
const assert = require('assert');

const asserEqual = (lastedList, userList, expect) =>
  it(`should return correct user:`, () => assert.equal(LuckGuy.luckyGuy(lastedList, userList), expect));


describe('LuckGuy', function () {
  [
    [
      [],
      [], ""
    ],
    [
      [],
      ["A"], "A"
    ],
    [
      ["A"],
      ["A"], "A"
    ],
    [
      ["A", "B"],
      ["B", "A"], "B"
    ],
    [
      ["A", "B"],
      ["A", "B", "C"], "C"
    ],
    [
      ["A", "B", "A"],
      ["A", "B", "C"], "C"
    ],
    [
      ["A", "B", "A", "B", "A", "B"],
      ["A", "B", "C"], "C"
    ],
    [
      ["A", "C", "B", "C", "B"],
      ["A", "B", "C"], "B"
    ]
  ].forEach(([lastedList, userList, expect], idx) =>
    describe(`Got correct user: ${idx}`, () => asserEqual(lastedList, userList, expect))
  )
});