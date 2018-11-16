const LuckGuy = require('../src/luckyGuy.bs')
const assert = require('assert');

describe('LuckGuy', function () {
  let cnt = 0
  describe('Got correct user', function () {
    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = [];
      const userList = [];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = [];
      const userList = ["A"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "A");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A"];
      const userList = ["A"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "A");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A", "B"];
      const userList = ["A", "B"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "B");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A", "B"];
      const userList = ["A", "B", "C"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "C");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A", "B", "A"];
      const userList = ["A", "B", "C"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "C");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A", "B", "C", "A", "C"];
      const userList = ["A", "B", "C"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "C");
    });

    it(`should return correct user: ${cnt++}`, function () {
      const lastedList = ["A", "B", "A", "B", "A", "B"];
      const userList = ["A", "B", "C"];
      const res = LuckGuy.luckyGuy(lastedList, userList);
      assert.equal(res, "C");
    });
  });
});