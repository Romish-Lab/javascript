//! Hoisting
//  declaration
// memory creation
// {x:undefined,y:undefined,hoist:}
// execution
// {x:30 y:() => {
//   console.log("Hoist");
// };}

console.log("Hoisting");
console.log(x);
console.log(a);
var a = 20;
var x = 30;
console.log(x);

hoist(); //

function hoist() {
  console.log(y); //

  var y = 23;
  console.log("Hoist");
}

hoist(); //

hoist();
// y();
// 5();

// var y = () => {
//   console.log("Hoist");
// };
// y();

// console.log(z);
let z = 23;
console.log(z);
//! temporal dead zone

let y = () => {
  console.log("Hoist");
};
y();

//! closure
