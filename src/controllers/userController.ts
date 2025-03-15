import { Request, Response, NextFunction } from "express";
// import { MdRemoveFromQueue } from "react-icons/md";
import { User } from "../models/UserModel";
import { genSaltSync, hashSync, compareSync } from "bcrypt-ts";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber, isSubscribed, location } =
      req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    const response = await User.create({
      name,
      email,
      password: hash,
      phoneNumber,
      isSubscribed,
      location,
    });
    res.status(201).json(response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (compareSync(password, user.password)) {
        user.isLoggedIn = true;
        await user.save();
        res.status(200).json(user);
      } else {
        res.status(401).json({
          message: "Password is incorrect",
        });
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      user.isLoggedIn = false;
      await user.save();
      res.status(200).json(user);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, phoneNumber, isSubscribed, location } =
      req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      await User.findByIdAndUpdate(id, {
        name,
        email,
        password,
        phoneNumber,
        isSubscribed,
        location,
      });
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const addToWishlist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { productId } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      if (!user.favorites.includes(productId)) {
        user.favorites.push(productId);
        await user.save();
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "Product already in wishlist" });
      }
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getWishlist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      res.status(200).json(user.favorites);
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const removeFromWishlist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { productId } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      if (!user.favorites.includes(productId)) {
        res.status(404).json({
          message: "Product not found in wishlist",
        });
      } else if (user.favorites.includes(productId)) {
        user.favorites = user.favorites.filter(
          (item: string) => item !== productId
        );
        await user.save();
        res.status(200).json({ message: "Product removed from wishlist" });
      }
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const deleteWishlist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else if (user.isLoggedIn === true) {
      user.favorites = [];
      await user.save();
      res.status(200).json({ message: "Wishlist deleted successfully" });
    } else {
      res.status(401).json({ message: "User is not logged in" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
};
