import express from "express";
import userRoute from "./user";
import authRoute from "./auth";

const router = express();

router.use("/user", userRoute);

export default router;
