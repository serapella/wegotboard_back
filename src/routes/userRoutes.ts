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

const router = express.Router();

router
  .get("/users/:id", getUserById)
  .post("/user/create", createUser)
  .post("/user/login", loginUser)
  .post("/user/logout", logoutUser)
  .patch("/users/:id", updateUser)
  .delete("/users/:id", deleteUser)
  .post("/users/:id/wishlist", addToWishlist)
  .get("/users/:id/wishlist", getWishlist)
  .delete("/users/:id/wishlist/:productId", removeFromWishlist)
  .delete("/users/:id/wishlist", deleteWishlist);

export default router;
