const Intro = require("../../models/Intro");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await Intro.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });
    res.status(200).json({
      status: true,
      message: "Intro information was updated successfully",
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
