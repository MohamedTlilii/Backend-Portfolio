const express = require("express");
const route = express.Router();

// Get Intro
route.get("/intro", require("./getIntro"));
// Get About
route.get("/about", require("./getAbout"));

// Get Experiences
route.get("/experiences", require("./getExperiences"));

// Get Projects
route.get("/projects", require("./getProjects"));
// Get Contact
route.get("/contact", require("./getContact"));

module.exports = route;
