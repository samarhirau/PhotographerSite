import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    title: { type: String, default: "" },
    type: { type: String, required: true }, // work or insta
  },
  { timestamps: true }
);

const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);
export default Image;
