import mongoose from "mongoose";

const UserReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    nullable: true,
    trim: true,
  },
});

export const UserReview = mongoose.model("UserReview", UserReviewSchema);
