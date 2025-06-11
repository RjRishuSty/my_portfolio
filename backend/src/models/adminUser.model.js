import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
  },
  { timestamps: true }
);

const adminUserModel = mongoose.model("AdminUser", adminUserSchema);

export default adminUserModel;
