import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());

app.use(express.json());
app.use("/", router);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () => {
      console.log(`Server listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
    process;
  }
}

start();
