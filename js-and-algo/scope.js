/* section 2
1.What will console log?
2.Will there be an error?
    Why?
3.Will something be undefined?
    Why?
4.To what scope does each variable belong?
5.Global or local? If local, to which specifically?
*/
let isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}
