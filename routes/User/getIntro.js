const Intro = require("../../models/Intro");
module.exports = async (req, res) => {
  try {
    let intros = await Intro.find();
    res.status(200).json({ status: true, data: intros });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
