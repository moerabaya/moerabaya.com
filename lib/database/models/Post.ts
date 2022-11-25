import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    trim: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * @typedef Post
 */
export default mongoose.models.Post || mongoose.model("Post", PostSchema);
