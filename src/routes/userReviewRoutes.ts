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
  .get("/users/:id/reviews", getUserReviewById)
  .post("/users/:id/reviews", authenticateUser, createUserReview)
  .patch("/users/:id/reviews/:reviewId", authenticateUser, updateUserReview)
  .delete("/users/:id/reviews/:reviewId", authenticateUser, deleteUserReview);

export default router;
