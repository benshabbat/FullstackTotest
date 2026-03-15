import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();


app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});



