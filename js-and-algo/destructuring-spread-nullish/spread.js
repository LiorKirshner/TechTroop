/*goal:
let meatArr = ["beef", "chicken", "rabbit"];
let vegetableArr = ["carrots", "potatoes", "lettuce"];
*/

let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, vegetableArr[0]];
vegetableArr = [...vegetableArr.slice(1)];

console.log(meatArr); //[beef , chicken , rabbit]
console.log(vegetableArr);

//ex2 - the torn passport

var firstPiece = { id: 101, name: "Ofri" };
var seoncdPiece = { country: "Israel" };

var passport = { ...firstPiece, ...seoncdPiece };
console.log(passport);
