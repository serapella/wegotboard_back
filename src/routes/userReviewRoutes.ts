import express from "express";
import { authenticateUser } from "../middleware/authMiddleware";
const router = express.Router();
import {
  getUserReviews,
  getUserReviewById,
  createUserReview,
  updateUserReview,
  deleteUserReview,
} from "../controllers/userReviewController";

router
  .get("/reviews", getUserReviews)
  .get("/:id/reviews", getUserReviewById)
  .post("/:id/reviews", authenticateUser, createUserReview)
  .patch("/:id/reviews/:reviewId", authenticateUser, updateUserReview)
  .delete("/:id/reviews/:reviewId", authenticateUser, deleteUserReview);

export default router;
