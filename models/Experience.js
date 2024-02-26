const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    title: {
      type: String,
      require: true,
    },
    period: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  });
  
  module.exports = Experience = mongoose.model("experience", experienceSchema);
