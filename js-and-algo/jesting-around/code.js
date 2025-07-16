class calc {
  static add = function (a, b) {
    return a + b;
  };

  static calculateHyp(x, y) {
    return Math.sqrt(x * x + y * y);
  }
}

const clearLowPriority = function (arr) {
  return arr.filter((a) => a.priority === "HIGH");
};

module.exports = { calc, clearLowPriority };
