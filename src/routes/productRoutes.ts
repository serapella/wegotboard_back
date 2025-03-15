import express from "express";
import { getProducts, getProductById } from "../controllers/productController";

const router = express.Router();

router
  .get("/products", getProducts)
  .get("/products/:id", getProductById)
  .get("/:category", getProducts);

export default router;
