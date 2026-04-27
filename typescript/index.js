"use strict";
//! typescript
//? data types
// string
// number
// boolean
// null
// undefined
// any
// unknown
// void
// never
//? variable declaration
// let , const , var
let str = "Hello";
console.log(str);
// str = 23;
let num;
num = 12;
// num = "hello";
num = 45;
num = 45.34;
let isLoggedIn = true;
isLoggedIn = false;
let a = null;
let b = undefined;
//! any
// let c: any;
// c = 5;
// c = "any type";
// console.log(c.toUpperCase());
//! unknown
// let d: unknown;
// d = 34;
// d = "unknown type";
// if (typeof d === "string") {
//   console.log(d.toUpperCase());
// }
//! array
let numbers = [1, 2, 3, 5];
let strings = ["1"];
numbers.push(23);
// numbers.push('23')
//! tuple
let tuple = [1, "1", true, 2];
//! object
let user = {
    name: "John",
    email: "john@gmail.com",
    age: 28,
    password: "12345",
};
//! interface
// interface IUser {
//   name: string;
//   email: string;
//   age?: number; //! optional property
//   password: string;
//   role: string;
// }
// let user1: IUser = {
//   name: "John",
//   email: "john@gmail.com",
//   age: 28,
//   password: "12345",
//   role: "hsjdf",
// };
// let user2: IUser = {
//   name: "John",
//   email: "john@gmail.com",
//   password: "12345",
//   role: "233",
// };
//! enum
//? named constant
// enum Role {
//   ADMIN = 10,
//   SUPER_ADMIN,
//   USER,
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["SUPER_ADMIN"] = "SUPER ADMIN";
    Role["USER"] = "USER";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.SUPER_ADMIN);
let user1 = {
    name: "John",
    email: "john@gmail.com",
    age: 28,
    password: "12345",
    role: Role.ADMIN,
};
let users = [
    {
        name: "",
        email: "1",
        password: "",
    },
    {
        name: "",
        email: "2",
        password: "",
    },
];
let user_acc = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
};
//! function
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(add(12, 3));
// console.log(add("12", "3"));
// ! void
let greet = (name) => {
    console.log(name);
};
//! never
const never = () => {
    throw "new error";
};
const add1 = (...numbers) => {
    // return a + b;
};
//! union [ | ]
let id = 12;
id = "2";
const add = (a, b) => {
    return a + b;
};
console.log(add(12, 3));
let c = {
    name: "",
    email: "",
    password: "",
};
let d = {
    email: "",
    password: "",
};
let e = {
    e: "",
    f: "",
};
//!  type literal
let res_status;
let Status;
res_status = "success";
res_status = "error";
//! class
class Person {
    name;
    email;
    password;
    age;
    constructor(name, email, pass, age) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = pass;
    }
}
