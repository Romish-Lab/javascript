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
let str: string = "Hello";
console.log(str);

// str = 23;

let num: number;
num = 12;
// num = "hello";
num = 45;
num = 45.34;

let isLoggedIn: boolean = true;
isLoggedIn = false;

let a: null = null;

let b: undefined = undefined;

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
let numbers: number[] = [1, 2, 3, 5];
let strings: Array<string> = ["1"];
numbers.push(23);
// numbers.push('23')

//! tuple
let tuple: [number, string, boolean, number] = [1, "1", true, 2];

//! object

let user: {
  name: string;
  email: string;
  age: number;
  password: string;
} = {
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

enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER ADMIN",
  USER = "USER",
}

console.log(Role.ADMIN);
console.log(Role.SUPER_ADMIN);

interface IUser {
  name: string;
  email: string;
  age?: number; //! optional property
  password: string;
  role: Role;
}

let user1: IUser = {
  name: "John",
  email: "john@gmail.com",
  age: 28,
  password: "12345",
  role: Role.ADMIN,
};

interface IUser2 {
  name: string;
  email: string;
  password: string;
  age?: number;
}

let users: IUser2[] = [
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
// users.map((user) => {
//   console.log(user.email);
// });

interface ILogin {
  email: string;
  password: string;
}

interface IReg extends ILogin {
  userName: string;
  fullName: string;
}

let user_acc: IReg = {
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
let greet = (name: string): void => {
  console.log(name);
};

//! never
const never = (): never => {
  throw "new error";
};

const add1 = (...numbers: number[]) => {
  // return a + b;
};

//! union [ | ]
let id: number | string = 12;
id = "2";
// id = true;

//! type [type alias]
type A = {
  password: string;
  email: string;
};
// let b:A={

// }

type addF = (x: number, y: number) => number;

const add: addF = (a, b) => {
  return a + b;
};
console.log(add(12, 3));

//! intersection [ & ]
type B = {
  name: string;
};

type C = A & B;
type D = A | B;
let c: C = {
  name: "",
  email: "",
  password: "",
};

let d: D = {
  email: "",
  password: "",
};

// diff betn. type & interface

interface E {
  e: string;
}

interface E {
  f: string;
}

let e: E = {
  e: "",
  f: "",
};

//!  type literal
let res_status: "success" | "fail" | "error";
type STATUS = "success" | "fail" | "error";
let Status: STATUS;
res_status = "success";
res_status = "error";

//! class
class Person {
  name: string;
  protected email: string;
  private password: string;
  age: number;
  constructor(name: string, email: string, pass: string, age: number) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = pass;
  }
}

//! generic type

interface IBox<T> {
  value: T;
}

// interface INBox {
//   value: number;
// }

// interface IOBox {
//   value: {
//     x: number;
//     y: number;
//   };
// }
let str_box: IBox<string> = {
  value: "",
};

let num_box: IBox<number> = {
  value: 12,
};

let ob_box: IBox<{ x: number; y: number }> = {
  value: {
    x: 12,
    y: 23,
  },
};

//

// type IF = <T>(name:T) => T
const identity = <T>(a: T): T => {
  return a;
};

console.log(identity<number>(12));
console.log(identity<string>("12"));

//! utility types
