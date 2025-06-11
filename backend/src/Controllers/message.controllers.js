import { isValidEmail } from "../Lib/isEmailValid.js";
import messageModel from "../models/message.model.js";

const addMessage = async (req, res) => {
  const { fullname, email, subject, message } = req.body;
  if (!fullname || !email || !subject || !message)
    return res
      .status(400)
      .json({ message: "All Fields are required!", success: "false" });
  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      success: false,
    });
  }
  try {
    const newMessage = new messageModel({ fullname, email, subject, message });
    await newMessage.save();
    return res.status(201).json({
      message:
        "Your message has been sent successfully. We'll get back to you soon!",
      success: true,
      data: newMessage,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "An error occurred while submitting your message. Please try again later.",
      success: false,
      error: error.message,
    });
  }
};

export { addMessage };
