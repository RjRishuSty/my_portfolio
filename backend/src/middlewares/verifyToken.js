import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Please Login " });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default verifyToken;
