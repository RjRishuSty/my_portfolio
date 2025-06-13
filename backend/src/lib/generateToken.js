import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  // Cookies............
  res.cookie("jwt_token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
