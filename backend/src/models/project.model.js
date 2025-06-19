import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    functional_title: { type: String, required: true },
    devFunctionalities: {
      type: [String],
      required: true,
    },
    images: { type: [String], default: [] },
    skills: { type: [String], required: true },
    demo: { type: String, default: "" },
  },
  { timestamps: true }
);

const projectModel = mongoose.model("projects", projectSchema);

export default projectModel;
