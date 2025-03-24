import { Request, Response } from "express";
import { Todo } from "../models/exampleModel";
import { Error as MongooseError } from "mongoose";
import { Product } from "../models/ProductModel";
import { ExpressHandlebars } from "express-handlebars";
import { Category } from "../models/CategoryModel";
import { Tag } from "../models/TagModel";
import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";
import { User } from "../models/UserModel";
import jwt from "jsonwebtoken";

const { ValidationError } = MongooseError;
const { JWT_SECRET } = process.env;

const authCheck = async (req: Request, res: Response) => {
  if (!req.user) {
    res.redirect("/admin/login");
    return;
  }
  //@ts-ignore
  if (!req.user.isAdmin) {
    res.redirect("/");
    return;
  }
};
export const showProducts = async (req: Request, res: Response) => {
  authCheck(req, res);

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
  authCheck(req, res);
  try {
    const { id } = req.body;
    if (id) await Product.findByIdAndDelete(id);
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

export const addProduct = async (req: Request, res: Response) => {
  authCheck(req, res);
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
  authCheck(req, res);
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
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Email and password are required",
      });
      return;
    }

    if (!JWT_SECRET) {
      throw new Error("Internal error");
    }
    const user = await User.findOne({ email });

    if (!user) {
      res.redirect("/admin/login/?error=user");
    } else {
      if (compareSync(password, user.password)) {
        await user.save();

        const token = jwt.sign({ email }, JWT_SECRET as string, {
          expiresIn: "1h",
        });

        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production" ? true : false,
          sameSite: true,
          maxAge: 60 * 60 * 1000,
        });

        res.redirect("/admin/products");
      } else {
        res.redirect("/admin/login/?error=user");
      }
    }
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
export const loginPage = async (req: Request, res: Response) => {
  try {
    const { error } = req.query;
    const user = req.user;
    if (user) authCheck(req, res);
    res.render("login", {
      data: { error },
      layout: false,
    });
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

export const homePage = async (req: Request, res: Response) => {
  try {
    res.redirect("/admin/login");
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
