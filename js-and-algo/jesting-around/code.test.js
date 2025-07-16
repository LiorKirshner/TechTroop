//const { describe } = require("node:test");
const { calc, clearLowPriority } = require("./code");

describe("calc tests", () => {
  test("add should return sum of a + b", () => {
    let sum = calc.add(1, 2);
    expect(sum).toBe(3);
  });
  test("return the square root of the sum of the numbers", () => {
    let sqr = calc.calculateHyp(3, 4);
    expect(sqr).toBe(5);
  });
  test("add should work with negative numbers", () => {
    let sum = calc.add(-2, -3);
    expect(sum).toBe(-5);
  });
  test("calculateHyp should return 0 for (0,0)", () => {
    let sqr = calc.calculateHyp(0, 0);
    expect(sqr).toBe(0);
  });
  test("add should work with zero", () => {
    let sum = calc.add(0, 5);
    expect(sum).toBe(5);
  });
});

describe("priorityFilter", () => {
  test('should return a new array with only "HIGH" priority items', () => {
    const input = [
      { text: "a", priority: "HIGH" },
      { text: "b", priority: "LOW" },
      { text: "c", priority: "HIGH" },
    ];
    const result = clearLowPriority(input);
    expect(result.every((a) => a.priority === "HIGH")).toBe(true);
  });
  test('should return empty array if no "HIGH" priority items', () => {
    const input = [
      { text: "a", priority: "LOW" },
      { text: "b", priority: "MEDIUM" },
    ];
    const result = clearLowPriority(input);
    expect(result).not.toContain("LOW");
  });
  test('should return all items if all are "HIGH" priority', () => {
    const input = [
      { text: "a", priority: "HIGH" },
      { text: "b", priority: "HIGH" },
    ];
    const result = clearLowPriority(input);
    expect(result).toEqual(input);
  });
  test("should handle empty input array", () => {
    const input = [];
    const result = clearLowPriority(input);
    expect(result).toEqual([]);
  });
});
