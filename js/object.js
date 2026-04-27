// primitive & non-primitive data types
//! object
// let user_name =''
// let user_email = ''

// object literal  => {}
// new keyword  => new Object()
let person = new Object({ email: "abc@gmail.com" });
let user = {
  email: "john@gmail.com",
  //   is_verified: true,
  password: "123456",
};

//? assign new properties
user.name = "John";
user["address"] = "ktm,Nepal";
// person.email = "john@gmail.com";

//? accessing properties
//! dot notation
console.log(user.email);
let user_name = user.name; //
// console.log(user_name);

//! bracket notation
console.log(user["password"]);

// console.log(user["is verified"]);

let key = "is_verified";

console.log(user.key); //
console.log(user[key]);

user[key] = true;

//! modify properties
user.password = "password";

console.log(user);

let user1 = user;

// console.log(user1 === user);

let x = 10;
let y = x;
y = 90;
console.log(x, y);

user1.name = "john doe";
// console.log(user1, user);

// main { x:10 ,y:10 ,user:&123 ,user1:&123}
// heap {&123 : {name:'',pass:''}}

//
// let obj = {};
// if (obj) {
//   console.log("run");
// }

// ternary op
let age = null;
console.log(age ? age : "age not found");

// nullish op / null safety
console.log(age ?? "age not found");

let user2 = {
  name: "user 2",
  address: {
    city: "ktm",
    street: "123",
  },
};

let user3 = {
  name: "user 2",
  greet: function () {
    console.log("Hello world");
  },
};

//! dot
if (user.address) {
  if (user.address.city) {
    console.log(user.address.city);
  } else {
    console.log("city not found");
  }
}

//! optional chaining ?
console.log(user2?.address?.city ?? "city not found");

//! bracket

console.log(person);

//? delete properties
delete user.email;

user3.greet();
