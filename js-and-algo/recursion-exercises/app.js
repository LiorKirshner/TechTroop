/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1

const findFactorial = function (num, ans = 1) {
  //Your code here
  if (num <= 0) return ans;
  return findFactorial(num - 1, ans * num);
};

console.log(findFactorial(5)); // returns 120
findFactorial(0); // returns 1
//Exercise 2
const reverseString = function (string, reversed = "") {
  if (string.length == 0) return reversed;
  return reverseString(string.slice(0, -1), reversed + string.slice(-1));
  //Your code here
};

//Exercise 3

const swap = function (arr1, arr2) {
  if (arr1.length === 0) return arr2;
  arr2.push(arr1.shift());
  return swap(arr1, arr2);
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
