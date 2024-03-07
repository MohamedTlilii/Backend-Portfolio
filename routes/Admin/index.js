const express = require("express");
const route = express.Router();

// update intro information
route.put("/updateintro/:id", require("./updateintro"));
module.exports = route;
