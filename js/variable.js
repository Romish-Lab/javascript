//? single threaded , interpreted & dynamic typed language

console.log("Hello world");
console.log(20);
console.log(3 + 5);

//! variable
// let, const, var
var a = 12;
console.log(a); // 12
a = 399;
var a = "var";
console.log(a); // var
let b = 56;
// let b = ''
b = "hello";
console.log(b);
const c = 34;
// const c = "";
// c = 357; //? TypeError: Assignment to constant variable.
// console.log(a); // a , 12

//! data types
//? number => int + double + float
let f = 23;
let g = 23.56;
//? string
let h = "John";
//! template literal  => ``
let i = `Hello ${h}`; //? Hello John
console.log(i);
//?  boolean
let j = true;
let k = false;

//? undefined
let l = "hello";
// l.charAt(0) = 'g'
l = 2;
var n;
const o = 34;

console.log(l);

//? null
let m = null;
