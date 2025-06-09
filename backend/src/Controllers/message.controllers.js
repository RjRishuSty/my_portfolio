import messageModel from "../Model/message.model.js";

const addMessage = async (req, res) => {
  const { fullname, email, subject, message } = req.body;
  if (!fullname || !email || !subject || !message)
    return res
      .status(404)
      .json({ message: "All Fields are required!", success: "false" });
  try {
    const newMessage = messageModel(req.body);
    if (newMessage) {
      await newMessage.save();
    }
    res.status(201).json({
      message: "Message submitted successfully!",
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Message submission failed!",
      success: false,
      data: error.message,
    });
  }
};

export { addMessage };
