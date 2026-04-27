//! closure

//* lexical scope
//*

//! MCP
// {a:undefined ,add:(a,b){} }

//!EP
// {a:30,add:(a,b){}}

// add
// GEC
// callstack

// var a = 30;

function add(a, b) {
  console.log(a + b); //15
}

// add(12, 3); //
// add(12, 4);

//! closure

// function counter() {
//   let count = 0;

//   const child = () => {
//     // console.log(count);
//     count++;
//     console.log(count);
//   };
//   return child;
// }

// const a = counter(); // {a:0}
// const b = counter(); // {b:0}
// // console.log(a);
// a();
// a();
// a();
// a();
// a(); //5
// b(); //1

// function add(a) {
//   return (b) => {
//     return a + b;
//   };
// }

//

function Counter(initial = 0) {
  let count = initial;
  function inc() {
    count++;
    console.log(count);
    return count;
  }

  function decrement() {
    count--;
    console.log(count);
    return count;
  }

  const obj = { increment: inc, decrement };

  return obj;

  // return { increment: inc, decrement }
}

const counter = Counter();
const counter1 = Counter(5);

console.log(counter);
counter.increment(); //1
counter1.increment(); //
counter1.increment(); //
counter1.decrement(); //
counter.decrement(); //

//! Account(acc_name , initial_amt)  => deposit(amt) , withdraw(amt) , blc_inquiry()
