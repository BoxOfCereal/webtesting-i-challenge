const enhancer = require("./enhancer.js");
// test away!
describe("enhancer test suite", () => {
  describe("repair test suite", () => {
    it("should repair the durability of the item to 100 if less than 100", () => {
      // arrange
      const item = { name: "broadsword", enhancement: "0", durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: "0",
        durability: 100
      };

      // act
      const actual = enhancer.repair(item);
      // assert
      expect(actual).toEqual(expected);
    });
    it("should keep the durability of the item if it is 100", () => {
      // arrange
      const item = { name: "dagger", enhancement: "1", durability: 100 };
      const expected = { name: "dagger", enhancement: "1", durability: 100 };

      // act
      const actual = enhancer.repair(item);
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
