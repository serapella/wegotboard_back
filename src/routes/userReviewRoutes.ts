import express from "express";
import {
  getUserReviews,
  getUserReviewById,
  createUserReview,
  updateUserReview,
  deleteUserReview,
} from "../controllers/userReviewController";

const router = express.Router();

router
  .get("/users/reviews", getUserReviews)
  .get("/users/:id/reviews", getUserReviewById)
  .post("/users/:id/reviews", createUserReview)
  .patch("/users/:id/reviews/:reviewId", updateUserReview)
  .delete("/users/:id/reviews/:reviewId", deleteUserReview);

export default router;
