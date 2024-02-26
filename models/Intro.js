const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const introSchema = new Schema({
  welcomeText: {
    type: String,
    required: [true, "title is required field"],
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
module.exports = Intro = mongoose.model("intros", introSchema);
