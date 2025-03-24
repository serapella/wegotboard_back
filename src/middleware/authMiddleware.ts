import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { type User as UserType } from "../utils/types";
import { User } from "../models/UserModel";
const { JWT_SECRET } = process.env;

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token || req.query.token || req.headers.token;
    console.log(token);
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    if (!JWT_SECRET) {
      throw new Error("Internal error");
    }
    const user = jwt.verify(token, JWT_SECRET);
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const foundUser = await User.findOne({
      email: (user as JwtPayload).email,
    }).select("-password");

    // @ts-ignore
    req.user = foundUser;
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
