import projectModel from "../models/project.model.js";

const createProject = async (req, res) => {
  const {
    name,
    description,
    functional_title,
    devFunctionalities,
    skills,
    images,
  } = req.body;

  if (
    !name ||
    !description ||
    !functional_title ||
    !devFunctionalities ||
    !skills
  ) {
    return res.status(400).json({
      message: "All fields are required.",
      success: false,
    });
  }

  try {
    const isExist = await projectModel.findOne({ name });
    if (isExist) {
      return res.status(400).json({
        message: "This project already exists.",
        success: false,
      });
    }

    const newProject = new projectModel({
      name,
      description,
      functional_title,
      devFunctionalities,
      skills,
      images: images || [],
    });

    await newProject.save();

    res.status(201).json({
      message: "Project created successfully",
      success: true,
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again",
      success: false,
      error: error.message,
    });
  }
};

export { createProject };
