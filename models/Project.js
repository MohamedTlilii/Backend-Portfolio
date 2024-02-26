const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    technolgies: {
      type: Array,
      require: true,
    },
  });
  module.exports = Project = mongoose.model("projects", projectsSchema);
