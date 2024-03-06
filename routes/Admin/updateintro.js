// updateintro.js

const Intro = require("../../models/Intro");

module.exports = async (req, res) => {
  try {
    // Debugging: Log the received request body
    console.log("Request Body:", req.body);

    // Extract intro ID from request parameters
    const { id } = req.params;

    // Update intro information in the database based on the intro ID
    await Intro.findByIdAndUpdate(id, {
      $set: {
        ...req.body,
      },
    });

    // Send success response
    res.status(200).json({ status: true, message: "Intro information was updated successfully" });
  } catch (error) {
    // Log error for debugging
    console.error("Error:", error);

    // Send error response with detailed error message
    res.status(500).json({ status: false, error: error.message });
  }
};
