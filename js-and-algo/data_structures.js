//ex1
class UniqueArray {
  constructor() {
    this.array = [];
    this.arrayLength = 0;
  }
  add(item) {
    if (!this.exists(item)) {
      this.array[this.arrayLength] = item;
      this.arrayLength++;
    }
  }

  showAll() {
    console.log(this.array);
  }
  exists(item) {
    const itemStr = JSON.stringify(item);
    return this.array.some((element) => JSON.stringify(element) === itemStr);
  }
  get(index) {
    if (index <= this.arrayLength && index >= 0) return this.array[index];
    else return -1;
  }
}
// const uniqueStuff = new UniqueArray();
// uniqueStuff.add("toy");
// uniqueStuff.showAll(); //prints ["toy"]
// uniqueStuff.add("toy");
// uniqueStuff.showAll(); //prints ["toy"]
// console.log(uniqueStuff.exists("toy")); //returns true
// uniqueStuff.add("poster");
// uniqueStuff.add("hydrogen");
// console.log(uniqueStuff.get(2)); //prints "hydrogen"

//ex2
const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.add("toy");
uniqueStuff.add({ x: 3 });
uniqueStuff.add({ x: 3 });
uniqueStuff.add([1, 2, 3]);
uniqueStuff.add([1, 2, 3]);

uniqueStuff.showAll();
// פלט: ["toy", {x: 3}, [1, 2, 3]]
