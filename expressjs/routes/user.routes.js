const {
  getuser,
  postuser,
  updateuser,
  deleteuser,
  getuserbyid,
} = require("../user/user.controller");
const express = require("express");
const router = express.Router();

// router.use((req, res, next) => {
//   console.log("User route level");
//   next();
// });
// get all users

// const mid = (req, res, next) => {
//   console.log("middleware called");
//   next();
// };

// const mid1 = (req, res, next) => {
//   console.log("middleware1 called");
//   next();
// };
router.get("/", getuser);

// get user by id
router.get("/john", getuser);
router.get("/:id", getuserbyid);
//* wrong approach (we should always put static path first)
// router.get("/john",getuser)
// create user
router.post("/", postuser);

// update user
router.put("/:id", updateuser);

// delete user
router.delete("/:id", deleteuser);

module.exports = router;
