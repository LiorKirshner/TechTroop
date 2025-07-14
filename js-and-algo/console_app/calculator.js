// Get command line arguments
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Usage: node calculator.js <number1> <operation> <number2>");
  process.exit(1);
}

const [num1Str, operator, num2Str] = args;

const num1 = Number(num1Str);
const num2 = Number(num2Str);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Both arguments must be valid numbers.");
  process.exit(1);
}

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: Division by zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Invalid operator: ${operator}`);
    console.log("Supported operators: +, -, *, /");
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
