//! arithmetic op. =>  + , - , * , **, / , %
console.log(12 + 3); // 15
let a = 12 - 3;
let b = 23;
let c = 34;
console.log(b - c);
let e = b - c;
b = b + c;
console.log(2 ** 4); // 2 pow 4

console.log("hello" + " " + "World");

//! assignment op. => = , += , -= .....
let d = 34;
b += c; // b = b + c
b -= 10; // b = b - 10

//! comparison op. => == , === , < ,> , <= , >=, !=,!==

// console.log(12 > 10); //
// console.log(12 >= 12); //

let f = 12;
let g = "12";
console.log(f == g); //
console.log(f === g); //

//! logical => AND ( && ) , OR ( || ) , NOT (!)

let x = true;
let y = false;
// console.log(x && y); // false
// console.log(x || y); // true
// console.log(!x); // => false

//! typeof op.
console.log(typeof b); //
console.log(typeof "jfgd");
console.log(typeof x);
console.log(typeof b === "number"); //

let z = null;

console.log(typeof z);

// unary
let num = 1;
console.log(num); // 1
// pre
console.log(++num); // 2

// post
console.log(num++); //2
console.log(num); //3

if (num === 3) {
  //
  console.log("num is 3");
} else {
  console.log("num is not 3");
  //
}

//! ternary op condition ?  statement_a : statement_b
let isNum3 = num === 3 ? "num is 3" : "num is not 3";

let age = 17;
// let canVote = age >= 18 ? "Can vote" : "Can not vote";
// console.log(canVote);

let canVote = null;
if (age >= 18) {
  canVote = "Can vote";
} else {
  canVote = " Can not vote";
}

//! type conversion
//? implicit / coercing
console.log(5 + "5"); //
console.log("10" - 4);
console.log("a" - 3); //

//? explicit
console.log(Boolean("abc"));
console.log(Number("123"));
console.log(Number("abc"));
console.log(String(true));
console.log(String(1244));
let l = 123;
console.log(l.toString());
console.log(parseInt("123.87"));
console.log(parseFloat("123.65"));

//? String methods
let str = "Hello-world";
console.log(str.charAt(0));
console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.endsWith("d"));
console.log(str.includes("Hello"));
let strNum = "12334";
console.log(strNum.padStart(5, "0"));
console.log(str.split(""));
console.log(str.replace("-", "_"));
console.log(str.indexOf("o")); //4
console.log(str.lastIndexOf("o")); //4

//! truthy & falsy value
// falsy
//? 0 , -0, '' , null , undefined , false
//truthy  => {} , []

console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean(0)); // false

let condition = 0;

if (condition) {
  console.log("run");
}
