const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // שנה לפי הצורך
  fridge: {
    price: 500,
    works: false, // שנה לפי הצורך
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

// עוזרים לקריאה:
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const radish = kitchen.fridge.items.find((item) => item.name === "radish");
const daysExpired = date - radish.expiryDate;
const owner = kitchen.owner;
const fixCost = kitchen.fridge.price / 2;

let message = `${owner}'s radish expired ${daysExpired} day${
  daysExpired !== 1 ? "s" : ""
} ago. `;

if (fridgeWorks) {
  message += "Weird, considering her fridge works. ";
} else {
  message += "Probably because her fridge doesn't work. ";
}

if (hasOven) {
  message += "Luckily, she has an oven to cook the radish in.";
} else {
  message += "Too bad she doesn't have an oven to cook the radish in.";
}

if (!fridgeWorks) {
  message += ` And she'll have to pay ${fixCost} to fix the fridge.`;
}

console.log(message);
