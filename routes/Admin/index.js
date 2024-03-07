const express = require("express");
const route = express.Router();

// update intro information
route.put("/updateintro/:id", require("./updateintro"));

// update about information
route.put("/updateabout/:id", require("./updateabout"));
module.exports = route;
