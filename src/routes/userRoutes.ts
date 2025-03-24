import express from "express";

import {
  getUserById,
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  deleteWishlist,
} from "../controllers/userController";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();

router
  .get("/users/:id", getUserById)
  .post("/user/create", createUser)
  .post("/user/login", loginUser)
  .post("/user/logout", logoutUser)
  .patch("/users/:id", authenticateUser, updateUser)
  .delete("/users/:id", authenticateUser, deleteUser)
  .post("/users/:id/wishlist", authenticateUser, addToWishlist)
  .get("/users/:id/wishlist", authenticateUser, getWishlist)
  .delete(
    "/users/:id/wishlist/:productId",
    authenticateUser,
    removeFromWishlist
  )
  .delete("/users/:id/wishlist", authenticateUser, deleteWishlist);

export default router;
