const { rejects, match } = require("assert");
const { resolve } = require("path");

// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 2. Check if all items are in stock
      const missing = items.filter(
        (item) => !inventory[item] || inventory[item].stock <= 0
      );

      // 3. Resolve if all available
      if (missing.length === 0) {
        resolve(items);
      } else {
        // 4. Reject with specific missing items
        reject(new Error(`Out of stock: ${missing.join(", ")}`));
      }
    }, 500); // 1. Wait 500ms
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:

  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let subtotal = 0;
        for (let item of items) {
          if (!inventory[item]) return reject();
          subtotal += inventory[item].price;
        }

        const tax = subtotal * 0.08;
        const total = subtotal + tax;

        resolve({ subtotal, tax, total });
      } catch (error) {
        reject(error);
      }
    }, 200); // 1. Waits 200ms
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
}
return new Promise((resolve, reject) => {
  setTimeout(() => {
    const successRate = Math.random();
    if (successRate < 0.9) {
      // 90% success
      const transactionId = Math.floor(Math.random() * 1000000);
      resolve({ transactionId, amount, status: "success" });
    } else {
      reject(new Error("Payment failure")); // 10% chance of failure
    }
  }, 1500); // Simulate payment processing delay
});

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        inventory[item].stock -= 1;
      }
      resolve(inventory);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
}

// // Test cases:
// checkout(["laptop", "mouse"]) // Should succeed
//   .then((result) => console.log("Order success:", result))
//   .catch((error) => console.log("Order failed:", error.message));

// checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
//   .then((result) => console.log("Order success:", result))
//   .catch((error) => console.log("Order failed:", error.message));

// checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
//   .then((result) => console.log("Order success:", result))
//   .catch((error) => console.log("Order failed:", error.message));
