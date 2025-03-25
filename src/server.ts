// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import { notFound } from "./controllers/notFoundController";
import productRoutes from "./routes/productRoutes";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import userReviewRoutes from "./routes/userReviewRoutes";
import verifyMailRoutes from "./routes/verifyMailRoutes";
import viewRoutes from "./routes/viewRoutes";
import cookieParser from "cookie-parser";
import hbsHelpers from "./utils/hbsHelpers";
import newsRoutes from "./routes/newsRoutes";
import { engine } from "express-handlebars";
import path from "path";
import { isAdmin } from "./middleware/adminMiddleware";
import { authenticateUser } from "./middleware/authMiddleware";
const __dirname = path.resolve();

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Views

app.set("views", path.join(__dirname, "src/views"));
app.engine(".hbs", engine({ extname: "hbs", helpers: hbsHelpers }));
app.set("view engine", ".hbs");

// Routes
app.use("/p", productRoutes);
app.use("/u", userRoutes);
app.use("/r", userReviewRoutes);
app.use("/m", verifyMailRoutes);
app.use("/", viewRoutes);
app.use("/api/news", newsRoutes);

app.all("*", notFound);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
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
