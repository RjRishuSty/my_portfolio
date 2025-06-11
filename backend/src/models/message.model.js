import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
},{timestamps:true});

const messageModel = mongoose.model("message", messageSchema);

export default messageModel;
