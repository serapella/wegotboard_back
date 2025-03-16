import { Request, Response } from "express";
import { Product } from "../models/ProductModel";
import { Error as MongooseError, ObjectId, SortOrder, Types } from "mongoose";
import { type ProductFilter } from "../utils/types";
import { Category } from "../models/CategoryModel";
const { ValidationError } = MongooseError;

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const {
      language,
      priceMax,
      playerMin,
      playerMax,
      difficulty,
      duration,
      ageMin,
      ageMax,
      page,
      limit,
      tags,
      categories,
      sort,
      order,
    } = req.query;

    const filters = {} as ProductFilter;
    if (language) filters.language = language as string;
    if (category) {
      let cat = await Category.findOne({ slug: category });
      filters.category = cat?._id.toString() as string;
    }
    if (categories) {
      let cats = await Category.find({
        slug: { $in: (categories as string).split(",") },
      });
      filters.category = { $in: cats.map((c) => c._id.toString()) };
    }
    if (priceMax) filters.price = { $lte: parseInt(priceMax as string) };
    if (playerMin)
      filters.playerCount = {
        ...filters.playerCount,
        min: { $gte: parseInt(playerMin as string) },
      };
    if (playerMax)
      filters.playerCount = {
        ...filters.playerCount,
        max: { $lte: parseInt(playerMin as string) },
      };
    if (difficulty)
      filters.difficulty = difficulty as ProductFilter["difficulty"];
    if (duration) filters.duration = duration as ProductFilter["duration"];
    if (ageMin)
      filters.ageRating = {
        ...filters.ageRating,
        $gte: parseInt(ageMin as string),
      };
    if (ageMax)
      filters.ageRating = {
        ...filters.ageRating,
        $lte: parseInt(ageMax as string),
      };
    if (tags) filters.tags = { $in: (tags as string).split(",") };

    const productsQuery = Product.find(filters)
      .populate("tags")
      .populate("category");

    if (limit) {
      if (page)
        productsQuery.skip(
          parseInt(page as string) * parseInt(limit as string)
        );
      productsQuery.limit(parseInt(limit as string));
    }

    if (sort) {
      let sorted = [sort, "asc"] as [string, SortOrder];
      if (order) sorted[1] = order as SortOrder;

      productsQuery.sort([sorted]);
    }

    const products = await productsQuery.exec();

    res.status(200).json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error: unknown) {
    if (error instanceof MongooseError.CastError) {
      res.status(400).json({ message: "Invalid product id" });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
