import mongoose from "mongoose";
const DB_URL =
  "mongodb+srv://developer123:developer123@cluster0.vxpl5xz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set("strictQuery", true);

export const connectDB = async () => {
  console.log(`Connecting to database ${process.env.DB_URL}`);
  return mongoose
    .connect(DB_URL)
    .then(() => console.log("Database connected successfully."))
    .catch((err) => {
      console.log("Error occurred while connecting database");
      console.log(err);
    });
};
