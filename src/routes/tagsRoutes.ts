import express from "express";
import { getTags, getProductsByTag } from "../controllers/tagsController";

const router = express.Router();

router.get("/", getTags);
router.get("/:tagId/products", getProductsByTag);

export default router;
