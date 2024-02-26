const Experience = require("../../models/Experience");
module.exports = async (req, res) => {
  try {
    let experiences = await Experience.find();
    res.status(200).json({ status: true, data: experiences });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
