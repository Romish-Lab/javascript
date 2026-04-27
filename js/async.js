//! sync
// blocking
//! async
// non blocking

//! setTimeout(callback,timer)

// const timer_id = setTimeout(
//   (name, age, x) => {
//     console.log("processing", name, age, x);
//   },
//   2000,
//   "abc",
//   12,
//   34,
// );
// clearTimeout(timer_id);
// console.log(timer_id);

// 1-10
// for loop

// setInterval(callback,interval)

// let count = 1;

// const interval_id = setInterval(() => {
//   //   console.log("Hello");
//   console.log(count);
//   if (count === 10) {
//     clearInterval(interval_id);
//   }
//   count++;
// }, 1000);

//! countdown timer
//? 0:59:59

console.log("start");

const getUser = (callback) => {
  console.log("fetching"); // 2sec
  setTimeout(() => {
    callback(null, {
      _id: "1",
      name: "john",
      email: "johndoe@gmail.com",
    });
  }, 2000);
};

// get userPost
const getPost = (userId, callback) => {
  setTimeout(() => {
    callback({ message: "Get post failed" }, [
      { userId, title: "abc", _id: 1 },
    ]);
  }, 1000);
};

//! get comments

const getComments = (postId, callback) => {
  setTimeout(() => {
    callback(null, [
      { postId, content: "comment 1", userId: 1, _id: 1 },
      { postId, content: "comment 1", userId: 1, _id: 2 },
    ]);
  }, 3000);
};

getUser((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(user);
  getPost(user._id, (error, posts) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(posts);
    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(comments);
    });
  });
});
// getPost(1);

// callback hell
// pyramid of doom

console.log("end");

// const parent = (callback) => {
//   callback(12);
// };

// parent(() => {
//   getPost();
// });

// parent((x) => {});
