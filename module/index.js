//* module
//? common js
// const add = require("./math.js");
// console.log(add);
// console.log(add.add(3, 4));

// const sub = require("./math.js");
// console.log(add.sub(5, 3));

// const { add } = require("./math.js");
// console.log(add(3, 4));

//! types of modules
//* commom js=>require()
//*ES module=> import/exports

//? custum module
//? third party module=> npm
//? inbuilt module => fs, os, http, path

//? npm, pnpm,patn
// npm init=> initialize empty node project
// npm init -y=> initialize empty node project
//? npm run<script_name>

//* npm registry
//? npm install=> installs all the dependencies
//? npm install<package_name>

//? npm uninstall<pkg_name?
//! version
// npm install <pkg_name>@version
import y, { sub } from "./esmodule.js";
console.log(y(12, 2));
console.log(sub(12, 2));

//* converting object into json object
let user = {
  name: "",
  email: "",
  password: "",
};

const json = JSON.stringify(user);
console.log(user);
console.log(json);

//* converting json into normal object
console.log(JSON.parse(json));
