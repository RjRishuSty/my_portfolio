//* Importing all install liber.......
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/message.routes.js";
import connectDB from "./lib/connDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rishu-portfolio-three.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/contact", messageRouter);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
