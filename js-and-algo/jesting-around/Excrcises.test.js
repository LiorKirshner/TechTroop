const {
  isEven,
  removeAtLeastOne,
  simplify,
  validator,
} = require("./Excrcises");

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

describe("validator", () => {
  let array = [4, 3, 6, "lior", 0];

  test("mix array - should be error", () => {
    expect(() => validator.validate([4, 3, 6, "lior", 0])).toThrow();
  });
  test("more true", () => {
    expect(validator.validate([true, false, true, 43, "lior"])).toBeTruthy();
  });
  test("more false", () => {
    expect(validator.validate([false, false, true, 43, "lior"])).toBeFalsy();
  });

  test("null input should throw error", () => {
    expect(() => validator.validate(null)).toThrow();
  });

  test("undefined input should throw error", () => {
    expect(() => validator.validate(undefined)).toThrow();
  });

  test("empty array should throw error", () => {
    expect(() => validator.validate([])).toThrow(
      "Array must contain at least one boolean"
    );
  });

  test("array with only non-booleans should throw error", () => {
    expect(() => validator.validate(["lior", 1, {}, []])).toThrow(
      "Array must contain at least one boolean"
    );
  });

  test("array with single true boolean and other junk", () => {
    expect(validator.validate([true, "lior", 42])).toBeTruthy();
  });

  test("array with single false boolean and other junk", () => {
    expect(validator.validate([false, null, undefined, "x"])).toBeFalsy();
  });
});
