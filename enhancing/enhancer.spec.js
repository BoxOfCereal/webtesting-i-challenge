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
  describe("Succeed test suite", () => {
    it("should increase the enhancement by one if less than 20", () => {
      // arrange
      const item = { name: "broadsword", enhancement: 0, durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: 1,
        durability: 80
      };
      // act
      const actual = enhancer.succeed(item);
      // assert
      expect(actual).toEqual(expected);
    });
    it("should not change the enhancement level if it is 20", () => {
      // arrange
      const item = { name: "broadsword", enhancement: 20, durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: 20,
        durability: 80
      };
      // act
      const actual = enhancer.succeed(item);
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe("fail test suite", () => {
    it("should decrease the durability of an item by 5 if the enhancement is less than 15", () => {
      // arrange
      const item = { name: "broadsword", enhancement: 14, durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: 14,
        durability: 75
      };
      // act
      const actual = enhancer.fail(item);
      // assert
      expect(actual).toEqual(expected);
    });
    it("should decrease the durability of the item by 10 if the enhancement is 15 or more", () => {
      // arrange
      const item = { name: "broadsword", enhancement: 16, durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: 16,
        durability: 70
      };
      // act
      const actual = enhancer.fail(item);
      // assert
      expect(actual).toEqual(expected);
    });
    it("decreases the enhancement level by one if the enhancement level is greater than 16 and durability by 10", () => {
      // arrange
      const item = { name: "broadsword", enhancement: 17, durability: 80 };
      const expected = {
        name: "broadsword",
        enhancement: 16,
        durability: 70
      };
      // act
      const actual = enhancer.fail(item);
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
