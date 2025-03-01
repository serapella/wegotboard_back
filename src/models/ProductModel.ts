import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    Category: {
      type: String,
      required: true,
      trim: true,
    },
    Price: {
      type: Number,
      required: true,
      trim: true,
    },
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Images: {
      type: Array,
      required: true,
      trim: true,
    },
    Description: {
      type: String,
      required: true,
      trim: true,
    },
    PlayerCount: {
      type: Number,
      required: true,
      trim: true,
    },
    Difficulty: {
      type: String,
      Enum: ["Easy", "Medium", "Hard"],
      required: true,
      trim: true,
    },
    AgeRating: {
      type: Number,
      minValue: 0,
      maxValue: 18,
      nullable: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Product", ProductSchema);
