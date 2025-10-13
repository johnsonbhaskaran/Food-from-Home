import express from "express";
import "dotenv/config.js";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import foodListRoutes from "./src/routes/foodListRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import dbConnect from "./src/config/dbConnect.js";

// eslint-disable-next-line no-undef
const PORT = process.env.SERVER_PORT || 3001;

const app = express();
dbConnect();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/foodList", foodListRoutes);
app.use("/api/users", userRoutes);

// Custom Middlewares

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
