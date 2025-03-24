import { Request, Response } from "express";
import { Todo } from "../models/exampleModel";
import { Error as MongooseError } from "mongoose";
import { Product } from "../models/ProductModel";
import { ExpressHandlebars } from "express-handlebars";
import { Category } from "../models/CategoryModel";
import { Tag } from "../models/TagModel";
const { ValidationError } = MongooseError;

export const showProducts = async (req: Request, res: Response) => {
  const count = await Product.countDocuments();
  const categories = await Category.find().lean();
  const tags = await Tag.find().lean();

  Product.find()
    .lean()
    .then((products) => {
      res.render("products", {
        data: { products, count, categories, tags },
        layout: false,
      });
    });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (id) await Product.findByIdAndDelete(id);
  res.redirect("/admin/products");
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      category,
      description,
      price,
      discount,
      playerMin,
      playerMax,
      difficulty,
      duration,
      ageRating,
      width,
      depth,
      height,
      weight,
      tags,
      language,
      imageURLs,
    } = req.body;

    const images = imageURLs.split(/\n/);
    const newProduct = await Product.create({
      name,
      category,
      description,
      price,
      discount,
      playerCount: { min: playerMin, max: playerMax },
      difficulty,
      duration,
      ageRating,
      measurements: { width, height, depth, weight },
      language,
      tags,
      images,
    });
    res.redirect("/admin/products");
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const todo = await Todo.create({ task });
    res.status(201).json(todo);
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
