//ex1
console.log(5 > 2 && false); // false
console.log(!("knife" === "sword")) ;// !false -> true
console.log((1 < 2) || -1 > -1 || !false); //true || false || true ->true
console.log(!!true) ;// !false->true
console.log("") ; //empty string
console.log("5th Avenue" != "5th Avenue") ;//false
console.log((31 % 5) == "1"); //true
console.log(52 !== "52"); //true
console.log(undefined || null); //null






//ex2
let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;
console.log("a= "+a)
console.log("b= " + b);
console.log("c= " + c);


/*
a=3
b=3
c=3
*/