import { Request, Response, NextFunction } from "express";
import { User } from "../models/UserModel";

export const isAdminMiddleware = async (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
