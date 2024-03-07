const About = require("../../models/About");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await About.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res.status(200).json({
      status: true,
      message: "About information was updated successfully",
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
