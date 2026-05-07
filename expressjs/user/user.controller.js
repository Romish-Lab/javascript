
const User=require("../model/user.model")
let user = [
  {
    id: 1,
    name: "john",
    email: "john@gmail.com",
    password: 12345,
  },
  {
    id: 2,
    name: "bihari",
    email: "bihari@gmail.com",
    password: 12345,
  },
];



//! creating model (collection)
 // mongoose always create the model with prural name
//* GET all users
exports.getuser = async (req, res) => {
  try {
    const user = await User.find({});
    // console.log(user)
    res.status(200).json({
      message: "all users fetched successfully",
      data: user,
    });
  } catch (error) {
    // console.log(user)
    res.status(500).json({
      message: "something went wrong",
      data: null,
    });
  }
};

//* GET user by ID
exports.getuserbyid = (req, res) => {
  const id = parseInt(req.params.id);

  const foundUser = user.find((u) => u.id === id);

  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(foundUser);
};


//* CREATE user
exports.postuser =async (req, res) => {
  try{
    // const newuser = {
    // id: user.length + 1,
    // ...req.body,
  // };
const {name,email,password,phone}=req.body;
const user=await User.create({
  name,
  email,
  password,
  phone,
})
  // user.push(newuser);

  res.status(201).json({
    message: "User created successfully",
    data: User,
  });
  }
  catch(error){
    res.status(500).json({
      message:"something went wrong"
    })
  }
};

//* UPDATE user
exports.updateuser = (req, res) => {
  const id = parseInt(req.params.id);

  const index = user.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  user[index] = {
    ...user[index],
    ...req.body,
  };

  res.json({
    message: "User updated successfully",
    data: user[index],
  });
};

//* DELETE user
exports.deleteuser = (req, res) => {
  const id = parseInt(req.params.id);

  const index = user.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = user.splice(index, 1);

  res.json({
    message: "User deleted successfully",
    data: deletedUser,
  });
};

