// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(12, 2));
// // module.exports = add;

// const sub = (a, b) => {
//   return a - b;
// };
// console.log(sub(5, 1));
// console.log(sub);
// // module.exports = sub;

// module.exports = {
//   add,
//   sub,
// };

exports.sub = (a, b) => {
  return a - b;
};

exports.add = (a, b) => {
  return a + b;
};
