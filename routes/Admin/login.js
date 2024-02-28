const Admin = require("../../models/Admin");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
console.log(admin);
    if (!admin || admin.password !== password) {
      return res.status(401).json({ status: false, error: "Wrong email or password" });
    }
    
    res.status(200).json({ status: true, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};
