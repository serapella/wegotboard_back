// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import { notFound } from "./controllers/notFoundController";
import productRoutes from "./routes/productRoutes";
import newsRoutes from "./routes/newsRoutes";
import tagRoutes from "./routes/tagsRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import { helloMiddleware } from "./middleware/exampleMiddleware";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import userReviewRoutes from "./routes/userReviewRoutes";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/p", productRoutes);
app.use("/tags", tagRoutes);
app.use("/categories", categoryRoutes);
app.use("/u", userRoutes);
app.use("/r", userReviewRoutes);
app.all("*", notFound);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:PR2Tc3qmhHEzpSO3@wegotboard-01.rr0nz.mongodb.net/wegotboard?retryWrites=true&w=majority&appName=WeGotBoard-01"
    );
    console.log("Database connection OK");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB().then(() => {
  // Server Listening
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}! 🚀`);
  });
});

// Export
export default app;
