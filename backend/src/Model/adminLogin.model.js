import mongoose from "mongoose";

const adminLoginSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
  },
  { timestamps: true }
);

const adminLoginModel = mongoose.model("adminLogin", adminLoginSchema);

export default adminLoginModel;
