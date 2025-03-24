import express from "express";
import {
  addProduct,
  deleteProduct,
  homePage,
  loginPage,
  loginUser,
  showProducts,
} from "../controllers/viewController";
import { isAdmin } from "../middleware/adminMiddleware";
import { authenticateUser } from "../middleware/authMiddleware";

const router = express.Router();

router
  .get("/admin/products", authenticateUser, isAdmin, showProducts)
  .post("/admin/products/delete/:id", authenticateUser, isAdmin, deleteProduct)
  .post("/admin/products/add", authenticateUser, isAdmin, addProduct)
  .get("/admin/login", loginPage)
  .post("/admin/login", loginUser)
  .get("/", homePage);

export default router;
