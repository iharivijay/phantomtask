import express from "express";
import userRouter from "./user.js";
import orderRouter from "./order.js";

const router = express.Router();

router.use("/", userRouter);
router.use("/orders", orderRouter);

export default router;
