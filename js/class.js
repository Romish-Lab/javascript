// let user = {
//   name: "",
//   email: "",
//   password: "",
// };

// let user1 = {
//   name: "",
//   email: "",
//   password: "",
// };

//! class

class User {
  //   name;
  //   email;
  #password;
  //   constructor
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getName() {
    console.log(this);
    console.log(this.name);
  }
  getPassword() {
    return this.#password;
  }
}

const john = new User("john", "john@gmail.com", "123456");
const john1 = new User("john1", "john1@gmail.com", "123456");
console.log(john.name);
john.getName(); //
john1.getName(); //
console.log(john, john.getPassword());

// class Student name ,email ,password,roll , sec ,
class Student extends User {
  constructor(name, email, password, faculty, roll, sec) {
    super(name, email, password);
    this.faculty = faculty;
    this.roll = roll;
    this.section = sec;
  }
  getName() {
    return this.name;
  }
}

const student = new Student("Ram", "ram@gmail.com", "ram123", "BCT", 23, "A");
console.log(student);
console.log(student.getName());
console.log(student.getPassword());

//! class  Account(acc_name , initial_amt)  => deposit(amt) , withdraw(amt) , blc_inquiry()

// this keyword
console.log("this", this);

// let user = {
//   name: "john",
//   pass: "123",
//   getName() {
//     const f = () => {
//       console.log(this);
//     };
//     f();
//   },
// };
// user.getName();
