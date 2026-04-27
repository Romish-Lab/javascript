//! Array

let numbers = [1, 2, 3, 4];
let arr = new Array(1, 2, 3, 4);

// console.log(arr);
//* reading element
let first = numbers[0];
console.log(first);
// console.log(numbers[3]);
// numbers[2] = 23;

//* adding new elements
//? to end index
//? push
let x = numbers.push(34, 56);
console.log(x);

//? from start index
//? unshift
numbers.unshift(23, 28);
console.log(numbers);

//* removing elements
//? from end
//? arr.pop()
const el = numbers.pop();
console.log(el);
//? from start
//? arr.shift()

console.log(numbers.shift());

console.log(numbers.length);
numbers.push(56);
console.log(numbers);

console.log(numbers[numbers.length - 1]);
// console.log(numbers[-1]);
// console.log(numbers.at(-2));

//* indexof
console.log(numbers.indexOf(100));

//* includes
console.log(numbers.includes(340));

console.log(numbers.lastIndexOf(12));

console.log(numbers.concat([67, 56]));
console.log(numbers.join("-"));
// console.log(numbers.)
//* arr.splice(start_index , delete_count , ...items)
let y = numbers.splice(2, 0, 12, 34, 5, 6);
let z = numbers.splice(2, 3);
console.log(y);
console.log(z);

console.log(numbers);

let user = {
  name: "user 2",
  email: "abc@gmail.com",
  pass: "12334",
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);
console.log(keys);
console.log(values);
console.log(entries);
console.log(Object.fromEntries(entries));
// const arrr = [
//   ["name", "user 2"],
//   ["email", "abc@gmail.com"],
//   ["pass", "12334", "abc"],
// ];

// console.log(Object.fromEntries(arrr));
//

//! for in
for (key in user) {
  console.log(key, ":", user[key]);
}

//! for of

for (value of numbers) {
  console.log(value);
}

for (value of "hello") {
  console.log(value);
}
