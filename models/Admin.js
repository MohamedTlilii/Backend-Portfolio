const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, " Please enter your fullName 🥴"],
    },
  
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your Email ✉️"],
      // match: [
      //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      //   "This is invalid email",
      // ],
    },
    
    isAdmin: {
      type: Boolean,
      default: true,
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = Admin = mongoose.model("admins", adminSchema);
