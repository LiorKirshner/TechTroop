/*ex4
Create an arrow function that receives three parameters and returns their sum - it should be one line.*/
const sum = (num1, num2, num3) => num1 + num2 + num3;

console.log(sum(1, 2, 3));

/*ex5
Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:*/

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalize("bOb"));       // Bob  
console.log(capitalize("TAYLOR"));    // Taylor  
console.log(capitalize("feliSHIA"));  // Felishia  

/*ex6
Create a one-line arrow function called commentOnWeather that takes one parameter, temp.
It should call determineWeather and return the concatenation of "It's " and determineWeather's output:*/

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp =>  "It's " +determineWeather(temp);

console.log(commentOnWeather(24));
console.log(commentOnWeather(28));


