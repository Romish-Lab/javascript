const mongoose = require("mongoose");
//* defining user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes unnecessary strings at start or end
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps:true,
  // strict:false,// we can add other data than defined 
},
);
const User = mongoose.model("user", userSchema);
module.exports=User