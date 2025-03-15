import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Tag = mongoose.model("Tag", TagSchema);
