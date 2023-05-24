import express from "express";
import razorpayInstance from "../razorpay.js";

const orderRouter = express.Router();

orderRouter.post("/create", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount,
    currency: "INR",
    receipt: "receipt " + Date.now(),
  };

  try {
    const response = await razorpayInstance.orders.create(options);

    return res.json({
      success: true,
      orderId: response.id,
      currency: response.currency,
      amount: response.amount,
      status: response.status,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
    });
  }
});

export default orderRouter;
