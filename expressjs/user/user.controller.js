const User = require("../model/user.model");

//! creating model (collection)
// mongoose always creates the model with plural name

//* GET all users
exports.getuser = async (req, res, next) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      message: "all users fetched successfully",
      data: user,
    });
  } catch (error) {
    next({
      statusCode: 500,
      message: error.message || "something went wrong",
    });
  }
};

//* GET user by ID
exports.getuserbyid = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user=await User.findOne({_id:id})//* it never returns array
    const user = await User.findById(id);

    if (!user) {
      return next({
        statusCode: 404,
        message: "user not found",
      });
    }

    res.status(200).json({
      message: "user fetched successfully",
      data: user,
    });
  } catch (error) {
    next({
      statusCode: 500,
      message: error.message || "something went wrong",
    });
  }
};

//* CREATE user
exports.postuser = async (req, res, next) => {
  try {
    //! /user is a route
    console.log("CREATING NEW USER");

    const { name, email, password, phone } = req.body;

    //! validation
    if (!name) {
      return next({
        statusCode: 400,
        message: "name is required",
      });
    }

    if (!email) {
      return next({
        statusCode: 400,
        message: "email is required",
      });
    }

    if (!password) {
      return next({
        statusCode: 400,
        message: "password is required",
      });
    }

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
    next({
      statusCode: 500,
      message: error.message || "something went wrong",
    });
  }
};

//* UPDATE user
exports.updateuser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { name, email, password, phone } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return next({
        statusCode: 404,
        message: "user not found",
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
    next({
      statusCode: 500,
      message: error.message || "something went wrong",
    });
  }
};

//* DELETE user
exports.deleteuser = async (req, res, next) => {
  try {
    //1. User.findByIdAndDelete(id)

    //2.
    //const user =  await User.findOne({_id:id})
    // await user.deleteOne()

    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return next({
        statusCode: 404,
        message: "user not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      message: "User Deleted",
      data: null,
    });
  } catch (error) {
    next({
      statusCode: 500,
      message: error.message || "something went wrong",
    });
  }
};