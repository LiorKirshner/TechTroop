/*let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display: ", users);

  for (let user of users) {
    console.log(user.name);
  }
};

getData(displayData);

/*How would you fix the getData and displayData code from above, to make sure we get the data before we display it?
Note: You will see Going to display [object Object], this is because you cannot concatenate an object or array to a string.*/

/*
ex1
Write a function pushPull that takes one argument - a function - and invokes that function:
*/

const pushPull = function (act) {
  act();
};

const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"



console.log("ex2");
const returnTime = function (time) {
  console.log("The current time is: " + time);
};

const getTime = function (cb) {
  const time = new Date(); // מקבל את השעה הנוכחית
  cb(time); // מפעיל את הפונקציה שהועברה עם השעה
};

getTime(returnTime);

console.log("ex3");
console.log("----");

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};


const logData = function (data) {
  console.log("Logging: " + data);
};
displayData(console.error, logData, "I like to party");