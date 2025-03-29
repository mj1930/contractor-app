import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
import authRoutes from "./routes/auth.routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
