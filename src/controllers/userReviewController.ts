// getUserReviews,
// getUserReviewById,
// createUserReview,
// updateUserReview,
// deleteUserReview,

import { Request, Response } from "express";
import { UserReview } from "../models/UserReviewModel";
import { User } from "../models/UserModel";
import { ObjectId } from "mongodb";

export const getUserReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await UserReview.find()
      .populate("user")
      .populate("product");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getUserReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await UserReview.find({ user: new ObjectId(id) });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const createUserReview = async (req: Request, res: Response) => {
  try {
    const { user, product, rating, review } = req.body;
    if (!user || !product || !rating) {
      return res
        .status(400)
        .json({ message: "User, product, and rating are required." });
    }
    const newReview = await UserReview.create({
      user,
      product,
      rating,
      review,
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const updateUserReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { user, product, rating, review } = req.body;
    const updatedReview = await UserReview.findByIdAndUpdate(
      reviewId,
      { user, product, rating, review },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const deleteUserReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const deletedReview = await UserReview.findByIdAndDelete(reviewId);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
