const express = require("express");
const route = express.Router();
// const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// update intro information
route.put("/updateintro/:id", require("./updateintro"));

// update about information
route.put("/updateabout/:id", require("./updateabout"));


// Add Project
route.post(
    "/addProject",
    // verifiedToken,
    upload.array("photo", 1),
    require("./addProject")
  );
module.exports = route;
