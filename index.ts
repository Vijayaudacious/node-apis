import express, { Request, Response } from "express";
import mongoose from "mongoose";
import authRoute from "./src/Routes/auth";
import userRoute from "./src/Routes/user";
import { connectDB } from "./src/utils/dbConnection";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8090;

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);

app.use((req: Request, res: Response) => {
  res
    .status(200)
    .json("API is working Fine but path is incorrect check if enter manually");
});

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "System corrupt" });
  } catch (error) {
    return res.status(500).json(error);
  }
});
// const DB_URL =
//   "mongodb+srv://developer123:developer123@cluster0.vxpl5xz.mongodb.net/vijayP/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(DB_URL)
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err));

app.listen(PORT, () => {
  connectDB();
  console.log(`your server has started ${PORT}`);
});

// console
//   .log("dbContection>>>>>>>>>>>>>", dbContection)
//server port
