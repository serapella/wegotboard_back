import { Request, Response, NextFunction } from "express";
import { User } from "../models/UserModel";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;
    if (user) {
      const foundUser = await User.findOne({
        email: user?.email,
      }).select("-password");

      if (foundUser?.isAdmin)
        // @ts-ignore
        req.user = foundUser;
      else {
        req.user = undefined;
      }
    } else {
      req.user = undefined;
    }
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  }
};
