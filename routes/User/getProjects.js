const Project = require("../../models/Experience");
module.exports = async (req, res) => {
  try {
    let projects = await Project.find();
    res.status(200).json({ status: true, data: projects });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
