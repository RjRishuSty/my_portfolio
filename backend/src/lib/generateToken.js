import jwt from "jsonwebtoken";

const isProduction = process.env.NODE_ENV === "production";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  // Cookies............
  res.cookie("jwt_token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });
  return token;
};
