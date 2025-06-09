import messageModel from "../Model/message.model.js";

const getMessages = async (req, res) => {
  try {
    const allMessage = await messageModel.find();
    res.status(200).json({
      message: "Get all message successful",
      data: allMessage,
      success: "true",
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch Messages failed!",
      success: false,
      data: error.message,
    });
  }
};

export { getMessages };
