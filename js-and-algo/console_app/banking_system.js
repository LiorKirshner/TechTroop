const promptSync = require("prompt-sync");
const prompt = promptSync();

class Bank {
  constructor(cash = 0) {
    this._cash = cash;
  }

  checkBalance() {
    console.log("Current balance: $" + this._cash);
  }

  deposit(sum) {
    if (sum <= 0 || isNaN(sum)) {
      console.log("Please enter a valid positive amount.");
      return;
    }
    this._cash += sum;
    console.log("New balance: $" + this._cash);
  }

  withdraw(sum) {
    if (sum <= 0 || isNaN(sum)) {
      console.log("Please enter a valid positive amount.");
      return;
    }
    if (this._cash >= sum) {
      this._cash -= sum;
      console.log("New balance: $" + this._cash);
    } else {
      console.log("Insufficient funds.");
    }
  }
}

const bank1 = new Bank(100);

while (true) {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");

  const option = prompt("Choose option (1-4): ").trim();

  switch (option) {
    case "1":
      bank1.checkBalance();
      break;
    case "2":
      const depositAmount = Number(prompt("Enter amount to deposit: $"));
      bank1.deposit(depositAmount);
      break;
    case "3":
      const withdrawAmount = Number(prompt("Enter amount to withdraw: $"));
      bank1.withdraw(withdrawAmount);
      break;
    case "4":
      console.log("Thank you for using the banking system!");
      process.exit();
    default:
      console.log("Invalid option. Please choose between 1 and 4.");
  }
}
