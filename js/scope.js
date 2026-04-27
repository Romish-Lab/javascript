//! Scope

//! global scope
let global_let = "global let";
const global_const = "global const";
var global_var = "global var";

console.log(global_let, global_const, global_var); //

//! block scope
if (true) {
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var";
  console.log("-----Block----");
  console.log(block_let, block_const, block_var); //

  //   console.log(global_var); //
  //   console.log(global_let); //
  //   console.log(global_const); //
}
console.log(block_var); //

//! function scope
// function scope() {
//   let function_let = "function let";
//   const function_const = "function const";
//   var function_var = "function var";
//   console.log("-----FUNCTION----");
//   //   console.log(global_var); //
//   //   console.log(global_let); //
//   //   console.log(global_const); //
// }
// scope();
// console.log(function_var); //

//! lexical scope

// function parent() {
//   let x = 20;
//   console.log(x);
//   function child() {
//     x = 50;
//     console.log(x); //
//   }

//   child();
// }

// parent();

//! scope chaining

// let x = 12;

// function parent() {
//   //   let x = 20;
//   console.log(x); //
//   function child() {
//     let x = 50;
//     console.log(x); //
//   }

//   child();
// }

// parent();

// function parent() {
// let x = 23
//   function child() {
//     let x = 50;
//     if (true) {
//       x = 34;
//     }
//     console.log(x); //
//   }

//   child();
// }

// parent();

//!
// memory creation phase

// execution phase

let x = 45;
x = 34;

const scope = (x) => {
  let y = 30;
  function b() {
    console.log(x);
    c();
  }
  b();
  return x * 2;
};
// console.log(x);

const res = scope(2); //
const res1 = scope(3);
const res2 = scope(4);
scope(4);
// fec  => call stack => scope() => b() => c()
// GEC

//* hoisting
//* closure
