const Contact = require("../../models/Contact");
module.exports = async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.status(200).json({ status: true, data: contacts });
  } catch (error) {
    if (error) {
      console.log(error);
    }
    res.status(401).json({ status: false, error });
  }
};
