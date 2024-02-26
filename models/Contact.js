const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  });
  module.exports = Contact = mongoose.model("contacts", contactSchema);
