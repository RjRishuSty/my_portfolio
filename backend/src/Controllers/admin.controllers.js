import { generateToken } from "../Lib/GenerateToken.js";
import adminLoginModel from "../Model/adminLogin.model.js";
import messageModel from "../Model/message.model.js";
import bcrypt from "bcryptjs";

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All Fields are required", success: "false" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    const isAdminExist = await adminLoginModel.findOne({ email });
    if (!isAdminExist)
      return res
        .status(400)
        .json({ message: "Sorry, Invalid email address", success: false });
    const isPasswordCurrect = await bcrypt.compare(
      password,
      isAdminExist.password
    );
    if (!isPasswordCurrect)
      return res
        .status(400)
        .json({ message: "Invalid Password", success: false });
    // Generate Token ............
    generateToken(isAdminExist.id, res);
    res.status(200).json({
      message: "Login Successfull",
      data: isAdminExist,
      success: "true",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch Messages failed!",
      success: false,
      data: error.message,
    });
  }
};

const adminLogout = async (req, res) => {
  try {
    res.cookie("jwt_token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully!" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error!",
      error: error.message,
      success: false,
    });
  }
};
const getMessages = async (req, res) => {
  try {
    const allMessage = await messageModel.find();
    res.status(200).json({
      message: "Get all message successful",
      data: allMessage,
      success: "true",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch Messages failed!",
      success: false,
      data: error.message,
    });
  }
};

export { getMessages, adminLogin ,adminLogout};
