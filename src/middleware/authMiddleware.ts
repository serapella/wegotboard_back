import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../utils/types";
const { JWT_SECRET } = process.env;

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.token;
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

    const userObject: User = {
      _id: (user as JwtPayload)._id,
      name: (user as JwtPayload).name,
      email: (user as JwtPayload).email,
    };

    req.user = userObject;
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
