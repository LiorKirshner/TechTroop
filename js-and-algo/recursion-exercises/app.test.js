const { findFactorial, reverseString, swap } = require("./app");

describe("findFactorial", () => {
  test("returns 120 for 5", () => {
    expect(findFactorial(5)).toBe(120);
  });

  test("returns 6 for 3", () => {
    expect(findFactorial(3)).toBe(6);
  });

  test("returns 1 for 0", () => {
    expect(findFactorial(0)).toBe(1);
  });

  test("returns 1 for negative numbers", () => {
    expect(findFactorial(-2)).toBe(1);
  });
});

describe("reverseString", () => {
  test("reverses a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("returns empty string for empty input", () => {
    expect(reverseString("")).toBe("");
  });

  test("returns same character for single character", () => {
    expect(reverseString("a")).toBe("a");
  });
});

describe("swap", () => {
  test("swaps arr1 and arr2 contents", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    swap(arr1, arr2);
    expect(arr1).toEqual([]);
    expect(arr2).toEqual([1, 2, 3]);
  });

  test("works with empty arrays", () => {
    const arr1 = [];
    const arr2 = [];
    swap(arr1, arr2);
    expect(arr1).toEqual([]);
    expect(arr2).toEqual([]);
  });
});

// We recommend installing an extension to run
