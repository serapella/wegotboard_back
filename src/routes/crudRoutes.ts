import express from "express";
import {
  addProduct,
  deleteProduct,
  showProducts,
} from "../controllers/crudController";

const router = express.Router();

router
  .get("/products", showProducts)
  .post("/products/delete/:id", deleteProduct)
  .post("/products/add", addProduct);

export default router;
