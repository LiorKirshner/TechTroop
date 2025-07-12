const coffeeShop = {
  beans: 40,
  money: 0,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 8 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method

    //1.Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise log: "Sorry, we don't make "
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    //3.Logs "Sorry, we're all out of beans!" if there are not enough beans to make that drink
    if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
      console.log("Sorry, we're all out of beans!");
      return;
    }
    //2.Reduces the beans count according to the drinkRequirements object and the given drinkType
    else {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      this.buyDrink[drinkType];
      console.log(drinkType + ", Enjoy :)");
    }
  },
  /*Extension 1 Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.
The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.
You decide how much the beans cost ~*/
  buyBeans: function (numBeans) {
    console.log(numBeans + " cost: " + numBeans * 2 + "$");
    return numBeans * 2;
  },
  /*Create a buyDrink method that accepts 1 parameter: drinkType. The method should:
Increase money depending on the price of drinkType
Call the makeDrink method*/
  buyDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

// Tests for buyDrink
console.log("---- buyDrink Tests ----");
coffeeShop.beans = 40;
coffeeShop.money = 0;

coffeeShop.buyDrink("latte"); // should log "latte, Enjoy :)" and add 5 to money
coffeeShop.buyDrink("americano"); // should log "americano, Enjoy :)" and add 3 to money
coffeeShop.buyDrink("filtered"); // should log "Sorry, we don't make filtered"
coffeeShop.beans = 4;
coffeeShop.buyDrink("doubleShot"); // should log "Sorry, we're all out of beans!"
console.log("Money: " + coffeeShop.money); // should log total money made (8)

//1.Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise log: "Sorry, we don't make "
//2.Reduces the beans count according to the drinkRequirements object and the given drinkType
//3.Logs "Sorry, we're all out of beans!" if there are not enough beans to make that drink
