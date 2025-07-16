const { isEven, removeAtLeastOne, simplify } = require("./Excrcises");

describe("should return true if n is even, false otherwise", () => {
  test("returns true for even number", () => {
    expect(isEven(42)).toBeTruthy();
  });

  test("returns false for odd number", () => {
    expect(isEven(41)).toBeFalsy();
  });
});

describe("removeAtLeastOne", () => {
  test("removes at least one element from a non-empty array", () => {
    let arr = [1, 23, 4, 32, 4, 4, 4, 5454, 4655, 6, 3, 3, 5, 6, 4, 4, 4];
    let len = arr.length;
    let arr2 = removeAtLeastOne(arr);
    expect(len).toBeGreaterThan(arr2.length);
  });

  test("removes the only element from an array of length 1", () => {
    let arr = [7];
    let arr2 = removeAtLeastOne(arr);
    expect(arr2.length).toBe(0);
  });

  test("returns empty array when input is empty", () => {
    let arr = [];
    let arr2 = removeAtLeastOne(arr);
    expect(arr2.length).toBe(0);
  });

  test("does not mutate the original array", () => {
    let arr = [1, 2, 3, 4];
    let arrCopy = [...arr];
    removeAtLeastOne(arr);
    expect(arr).not.toEqual(arrCopy);
  });
});

describe("simplify", () => {
  test("returns empty string or error for non-string input", () => {
    expect(() => simplify(["l!io####r,"])).toThrow(); // אם אתה רוצה שהיא תזרוק שגיאה
  });

  test("should return a clean string - lior", () => {
    let word = simplify("l!io####r,");
    expect(word).toEqual("lior");
  });

  test("should return a empty string ", () => {
    let word = simplify("####,");
    expect(word).toHaveLength(0);
  });
  test("should return a empty string ", () => {
    let word = simplify("");
    expect(word).toHaveLength(0);
  });
});
