import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  // Cookies............
  res.cookie("JWT_token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    httpOnly: true,
    sameSite: "strict",
  });
  return token;
};
