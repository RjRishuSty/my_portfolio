//* importing installed dependencies.......
import jwt from "jsonwebtoken";
import adminUserModel from "../models/adminUser.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    //* Get Token.......
    const token = req.cookies.jwt_token;
    console.log(token);
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized Request: Please Login!" });
    //* Compare token with decoded.......
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded)
      return res.status(401).json({ message: "Unauthorized: Invalid Token!" });
    // MongoDB query for find the user_id. (this query try to find only id not password);
    const user = await adminUserModel.findById(decoded.userId).select("-password");
    if (!user) return res.status(401).json({ message: "User not found!" });

    // If user Found........
    res.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Sever error!",
      error: error.message,
      success: false,
    });
  }
};
