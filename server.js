const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// YA9RA LES REQUET
require("dotenv").config();

// enviromentals variablese
const DBURI = process.env.DBURI;
const PORT = process.env.PORT || 5000;

// function

mongoose
  .connect(DBURI)
  .then(() => {
    console.log("database connected ✅");
  })
  .catch((err) => {
    console.log(err);
    console.log("can't coonect to database ❌");
  });
// middlewares
app.use(express.json());
app.use(cors())
app.use("/api/data", require("./routes/User"));
app.use("/api/data", require("./routes/Admin"));
// Portfolio routes


// Image Storage Engine
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// routes
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is up and runing on port :${PORT}`);
});
