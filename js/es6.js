//! es6
// let const
// ``
// arrow function
// default parameter
// class
// promise
// async/await
// enhanced object literal
// let name = "John";
// let user = {
//   name, // name:'John'  => name:name
//   email: "john@gmail.com",
//   pass:'1234456'
// };
// console.log(user);
// Destructuring
//? Object
let user = {
  name: "John",
  email: "john@gmail.com",
  pass: "1234456",
};

// let user_name = user.name;
// let email = user.email;
// let password = user.pass;
// let { email, name, pass } = user;
// let { email: user_email } = user;
// console.log(email, name, pass);
// console.log(user_email); //

//? array
const arr = [12, 34];
const [a, b] = arr;
console.log(a, b);

//! spread operator (...)
//
// let user2 = { ...user };
// console.log(user2); // {name,email,pass}
// const numbers = [...arr, 23, 45, 67]; //[[12,34],]
// console.log(numbers);

// const user3 = {
//   name: "Hari",
// };

// let user4 = { ...user, ...user3 }; // user , user3
// console.log(user4);

//! rest operator (...)

let { name, email, pass, ...rest } = user;
// let { ...x } = user;
// console.log(name, rest, x);
const numbers = [23, 45, 67, 65, 89];
let [i, j, ...y] = numbers;
console.log(i, j, y);

//
const add = (...numbers) => {
  //   console.log(numbers);
  return numbers.reduce((acc, value) => {
    return (acc += value);
  }, 0);

  //   return sum;
};

// console.log(add(12, 3, 5));
// console.log(add(12, 3));
// console.log(add(12, 3, 4, 56));

//! optional chaining
//! nullish op. ( ?? )

let user_name = "Ram";
let res = user_name ?? "Guest";
console.log(res);

//? array methods
// map , filter , reduce ...

// map , set
