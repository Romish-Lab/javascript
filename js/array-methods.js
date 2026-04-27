//! array methods

//push(1,23) => length
// unshift()
// pop() => last element
// shift() => first element

// includes()  => boolean
//  indexOf() => index / -1

let numbers = [23, 45, 67, 4, 5, 6];

//! hof
// loop
// arr.forEach(callback)

const callback = (value, index, array) => {
  console.log(value, index, array);
};

// numbers.forEach(callback);
// const result = numbers.forEach((v, index) => {
//   console.log(index, v);
//   numbers[index] = v * 2;
// });

// console.log(numbers);

//? map  x => y

const double1 = numbers.map(function (value) {
  return value * 2;
});

const double = numbers.map((value) => {
  return value * 2;
});

const double2 = numbers.map((value) => value * 2);

// console.log(numbers, double);

//? filter
const even1 = numbers.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
});
const even = numbers.filter((num) => num % 2 === 0);
console.log(even1, even);

//! reduce
let sum = numbers.reduce((acc, value) => {
  return (acc += value);
}, 0);

console.log(sum);

//findIndex
// every()
// some()
// sort()
// reverse()
// ...

const students = [
  {
    name: "Ram",
    marks: [54, 43, 56, 78, 67],
    // avg_marks:
  },
  {
    name: "Sita",
    marks: [54, 40, 56, 34, 67],
  },
  {
    name: "Hari",
    marks: [14, 40, 26, 34, 57],
  },
];

// calculate_avg
const cal_avg = (marks) => {
  const total_marks = marks.reduce((acc, mark) => {
    return (acc = mark + acc);
  });

  const avg = total_marks / marks.length;

  return avg;
};

// {name ,marks } =>  {name ,marks , avg_avg}
const stu_with_avg = students.map((student) => {
  // const total_marks = student.marks.reduce((acc, mark) => {
  //   return (acc = mark + acc);
  // });

  // const avg = total_marks / student.marks.length;
  const avg = cal_avg(student.marks);
  return {
    name: student.name,
    marks: student.marks,
    avg_mark: avg,
  };
});
console.log(stu_with_avg);
//
// 50 >= avg_mark
// const passed_stu = stu_with_avg.filter((stu) => {
//   if (stu.avg_mark >= 50) {
//     return stu;
//   }
// });
const passed_stu = stu_with_avg.filter((stu) => stu.avg_mark >= 50);

console.log(passed_stu);

// name-avg  ['ram-59.6','Sita-50.2']
// {} => ``
const passed = passed_stu.map((stu) => {
  return `${stu.name}-${stu.avg_mark}`;
});
console.log(passed);

// forEach
// map
// filter
// reduce

// [1,2,34,4]
