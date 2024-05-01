const Project = require("../../models/Project");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    const { title, description, link, technologies } = req.body;
    const image = req.file.path;

    // Function to upload image to Cloudinary
    const uploader = async (path) => {
      try {
        return await cloudinary.uploads(path, "Portfolio/Projects");
      } catch (error) {
        throw new Error("Error uploading image to Cloudinary");
      }
    };

    // Upload image to Cloudinary
    const result = await uploader(image);
    const imageUrl = result.url;

    // Create a new Project instance
    let newProject = await new Project({
      title,
      description,
      link,
      technologies,
      image: imageUrl,
    });

    // Save the new Project to the database
    await newProject.save();

    // Remove the temporary uploaded file
    fs.unlinkSync(image);

    res
      .status(201)
      .json({ status: true, message: "Project Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: error.message });
  }
};

