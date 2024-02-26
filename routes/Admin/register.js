const Admin = require("../../models/Admin");
// const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
  try {
    // console.log(req.body);
    let { fullName, email, password } = req.body;
    const newAdmin = await new Admin({
      fullName,
      email,
      password,
    });
    await newAdmin.save();
    res
      .status(200)
      .json({ status: true, message: "Admin was created successfully" });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error: error.errors });
  }
};
