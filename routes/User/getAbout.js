const About = require("../../models/About");
module.exports = async (req, res) => {
  try {
    let abouts = await About.find();
    res.status(200).json({ status: true, data: abouts });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
