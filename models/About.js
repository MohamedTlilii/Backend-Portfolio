const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    lottieURL: {
      type: String,
      require: true,
    },
    description1: {
      type: String,
      require: true,
    },
    description2: {
      type: String,
      require: true,
    },
    skills: {
      type: Array,
      require: true,
    },
  });
  module.exports = About = mongoose.model("abouts", aboutSchema);
