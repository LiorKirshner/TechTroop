let inventory = [
  { name: "Laptop", price: 899.99, quantity: 5 },
  { name: "Mouse", price: 24.99, quantity: 12 },
  { name: "Keyboard", price: 79.99, quantity: 8 },
  { name: "Monitor", price: 249.99, quantity: 3 },
  { name: "Headphones", price: 149.99, quantity: 6 },
];

/*Use .reduce() to calculate the total value of all inventory 
(price × quantity for each item, then sum them all up).*/

let totalValue = inventory.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(totalValue); // 10849.56

let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

let gradeCounts = studentScores.reduce(
  (acc, score) => {
    let grade;

    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else grade = "F";

    acc[grade] = (acc[grade] || 0) + 1;

    return acc;
  },
  { A: 0, B: 0, C: 0, F: 0 }
);

console.log(gradeCounts);

let cartItems = [
  { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
  { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
  { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
  { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
  { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 },
];

let taxRates = {
  clothing: 0.08, // 8% tax
  electronics: 0.1, // 10% tax
  food: 0.05, // 5% tax
};

//Use .reduce() to calculate the final total cost including tax for all items in the cart.

let total_cost = cartItems.reduce((sum, item) => {
  let price = item.price * item.quantity;
  let taxRate = taxRates[item.category];
  price *= 1 + taxRate; // כולל מס
  return sum + price;
}, 0);

console.log(total_cost);