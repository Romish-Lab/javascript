// if
let run = true;
if (run) {
  console.log("if block");
}

// if else
if (run) {
  console.log("if block");
} else {
  console.log("else block");
}

// if else if else

// switch case
let day = 4;
// switch (day) {
//   case 1: {
//     console.log("sunday");
//     break;
//   }
//   case 2: {
//     console.log("monday");
//     break;
//   }
//   case 3: {
//     console.log("tuesday");
//     break;
//   }
//   case 4: {
//     console.log("wednesday");
//     break;
//   }
//   case 5: {
//     console.log("thursday");
//     break;
//   }
//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

// loops

switch (day) {
  case 1:
  case 7: {
    console.log("Weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("Working day");
    break;
  }
  default: {
    console.log("Enter day between 1-7");
  }
}

// loops
//! while
// while (condition) {
// block
// }

let i = 11;
while (i <= 10) {
  console.log(i);
  i += 1;
}

//! do while
// do {
//   block;
// } while (condition);

let j = 12;
do {
  console.log(j);
  j += 1;
} while (j <= 10);

//!  for
for (let i = 0; i < 10; i--) {
  console.log("for", i);
  //block
}

//! for in
//! for of
