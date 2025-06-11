import { generateToken } from "../Lib/generateToken.js";
import adminUserModel from "../models/adminUser.model.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All Fields are required", success: false });
    if (password.length < 6)
      return res.status(400).json({
        message: "Password must be atleast 6 characters.",
        success: false,
      });
    const isAdminExist = await adminUserModel.findOne({ email });
    if (!isAdminExist)
      return res
        .status(400)
        .json({ message: "Sorry, Invalid email address", success: false });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      isAdminExist.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Invalid Password", success: false });
    // Generate Token ............
    generateToken(isAdminExist.id, res);
    res.status(200).json({
      message: "Login Successfull",
      data: isAdminExist,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed! Try again",
      success: false,
      data: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt_token", "", { maxAge: 0 });
    res
      .status(200)
      .json({ message: "Logged Out Successfully!", success: true });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error!",
      error: error.message,
      success: false,
    });
  }
};


export {login ,logout}
