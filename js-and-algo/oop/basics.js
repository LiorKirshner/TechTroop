class Vehicle {
  static carsSold = 0;

  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }

  set fuel(amount) {
    if (amount > 150) {
      return console.log(this.x + " ==>  Too much fuel");
    }
    if (amount < 0) {
      return console.log(this.x + " ==>  Not reasonable fuel amount");
    }
    this._fuel = amount;
  }

  get fuel() {
    return this._fuel;
  }
  set speed(speed) {
    if (speed < 0) {
      return console.log(this.x + " ==>  Speed must be positive");
    }
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }
  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
  }
}

const mazda = new Vehicle("mazda", 1, -110, 524);

const honda = new Vehicle("honda", 2, -130, 65);
//Vehicle.getInfo();
//Vehicle.calculateMoney();
console.log("honda.fuel: " + honda.fuel);
console.log("honda.speed: " + honda.speed);
