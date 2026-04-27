//! function

// function func_name() {
// block
// }

//! function declaration
// function greet() {
//   console.log("Hello World");
// }

// // x =>f(x)=>

// greet();
//! function with input
//? parameter
//? arguments

// function greet(user) {
//   console.log(`Hello ${user}`);
// }

// // x =>f(x) =>

// // greet("Ram");
// greet("John");
// greet();
// greet();
// greet();

// add
// function add(a, b, c) {
//   console.log(a + b + c);
// }

// add(12, 4, 23);

//! function with default parameter
// function greet(user = "Guest") {
//   console.log(`Hello ${user}`);
// }

// x =>f(x) => output

// greet("Ram");
// greet("John");
// greet();

// function with return type

function add(a = 0, b = 0) {
  //   console.log(a + b);
  //   let sum = a + b;
  //   return sum;
  return a + b;
}

// let re = 12 + 4;
// let result = add(12, 4); //
// console.log(result);

//! function expression
let x = 100;
let greet = function (name = "Guest") {
  console.log("hello world");
};

console.log(x); //

greet("John");

// const sub = function (a, b) {
//   return a - b;
// };

// let result = sub(12, 3);
// console.log(result);
// console.log(sub(23, 3)); //20
// console.log(sub); //

//! arrow function
// const sub = (a, b) => {
//   return a - b;
// };
// console.log(sub(13, 3));

// (num) => even ? true :false

const isEven = (number) => {
  // if (number % 2 !== 0) {
  if (number % 2) {
    return false;
  } else {
    return true;
  }
};

// console.log(isEven(3));
// console.log(isEven(10));

// if (isEven(2)) {
//   console.log("even number");
// } else {
//   console.log("odd");
// }

//snake case
// let is_student = true;

// camel case
// let isStudent = true;

const sub1 = (a, b) => {
  let r = a - b;

  return r;
};

const sub = (a, b) => a - b;
const double = (a) => a * 2;

const isNumEven = (num) => (num % 2 === 0 ? true : false);

console.log(sub(23, 3));

//! callback function
const parent = (func) => {
  console.log("parent");
  console.log(func); //
  let res = func(12, 3); //1
  console.log(res);
};

const child = (a, b) => {
  console.log("child");
  return a + b;
};

// console.log(sub(12,2)); //
// console.log(sub);
// parent(child());
// parent(child);

parent(child);

parent((a, b) => {
  console.log("child");
  return a + b;
});

//! higher order function
// function hof (){
//   function child (){
//     console.log('child')
//   }
//   return child
// }
// const result = hof()
// result()

const hof = () => {
  console.log("hof");
  const child = (a, b) => {
    console.log("inside hof");
    return a + b;
  };

  return child;
};

// let func = hof();
// let res = func(10, 2);
// console.log(res);

//! function factory
function factoryA(a) {
  return function (b) {
    return a + b;
  };
}

// const factory = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

const factory = (a) => (b) => a + b;
const factory1 = (a) => (b) => (c) => a + b + c;

const add5 = factory(5);
const add20 = factory(20);
console.log(add5(10));
console.log(add5(20));
console.log(add20(2));

const displayResult = (result) => {
  console.log("result:", result);
};

const higher = (a, b, operation) => {
  // const result = operation(a, b);
  displayResult(operation(a, b));
};

const add1 = (a, b) => {
  return a + b;
};

higher(10, 2, add1);
