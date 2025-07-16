//should return true if n is even, false otherwise
function isEven(n) {
  return n % 2 == 0 ? true : false;
}
//should remove at least one element from the array `arr`

function removeAtLeastOne(arr) {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
}

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
}

const validator = {
  validate(boolArray) {
    let onlyBools = boolArray.filter((v) => typeof v === "boolean");

    if (onlyBools.length === 0) {
      throw new Error("Array must contain at least one boolean");
    }

    let trueCount = onlyBools.filter((v) => v === true).length;
    let falseCount = onlyBools.filter((v) => v === false).length;

    return trueCount > falseCount;
  },
};

module.exports = { isEven, removeAtLeastOne, simplify, validator };
