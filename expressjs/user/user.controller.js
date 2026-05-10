const User = require("../model/user.model");

//! creating model (collection)
// mongoose always creates the model with plural name

//* GET all users
exports.getuser = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      message: "all users fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
      data: null,
    });
  }
};

//* GET user by ID
exports.getuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    // const user=await User.findOne({_id:id})//* it never returns array
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
        data: null,
      });
    }

    res.status(200).json({
      message: "user fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
      data: null,
    });
  }
};

//* CREATE user
exports.postuser = async (req, res) => {
  try {
    //! /user is a route
    console.log("CREATING NEW USER");

    const { name, email, password, phone } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      phone,
    });

    console.log(user);

    res.status(201).json({
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
      data: null,
    });
  }
};

//* UPDATE user
exports.updateuser = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, email, password, phone } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
        data: null,
      });
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    if (phone) {
      user.phone = phone;
    }
    //! save user
    const updatedUser = await user.save();

    // const updatedUser = await User.findByIdAndUpdate(
    //   id,
    //   req.body,
    //   {
    //     new: true,
    //   }
    // );

    res.status(200).json({
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
      data: null,
    });
  }
};

//* DELETE user
exports.deleteuser = (req, res) => {
  //1. User.findByIdAndDelete(id)

  //2.
  //const user =  await User.findOne({_id:id})
  // await user.deleteOne()

  const { id } = req.params;

  const index = users.findIndex(
    (user) => user._id.toString() === id.toString(),
  );

  if (index === -1) {
    res.status(404).json({
      message: "User not found",
      data: null,
    });
    return;
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User Deleted",
    data: null,
  });
};
