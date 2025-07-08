//ex1
function isEven(num){
    return (num % 2 == 0 );
}


//ex2
function odd_array(arr){
    for (let i=0;i<arr.length;i++){
        if (!isEven(arr[i])) console.log(arr[i]); 
    }

}

//odd_array([3,43,2,5,6,46,46,46,2,2,21,34,5553]);


//ex3
function checkExists(arr, n){
for (const num of arr) {
    if (num == n) return true;
}
return false;
}

console.log(checkExists([1, 2, 3], 2)) //- should return true
console.log(checkExists([1, 2, 3], 5)) //- should return false


//ex4
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42



//ex5
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
function makeRegal(name) {return (name = "His Royal Highness, "+name)};
function increaseByNameLength(money,name){
    return money*name.length;
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"



//ex5
function armstrongNumber(num){
    const hundreds = Math.floor(num / 100);
    const tens = Math.floor((num % 100) / 10);
    const units = num % 10;
    const calc =
      Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3);
      if (calc == num) console.log(num);

}
function printArmstrong(){
    for (let i=100;i<1000;i++) {
        armstrongNumber(i);
    }
}

printArmstrong()