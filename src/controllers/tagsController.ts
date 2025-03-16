import { Request, Response } from "express";
import { Tag } from "../models/TagModel";
import { Product } from "../models/ProductModel";
import { Category } from "../models/CategoryModel";

export const getTags = async (req: Request, res: Response): Promise<void> => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getProductsByTag = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { tagId } = req.params;
    const products = await Product.find({ tags: tagId })
      .populate("tags")
      .populate("category");

    if (!products.length) {
      res.status(404).json({ message: "No products found for this tag" });
      return;
    }

    res.status(200).json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
