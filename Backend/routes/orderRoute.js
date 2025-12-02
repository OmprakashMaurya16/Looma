const express = require("express");
const {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} = require("../controllers/orderController");
const adminAuth = require("../middleware/adminAuth");
const authMiddleware = require("../middleware/auth");

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/stripe", authMiddleware, placeOrderStripe);
orderRouter.post("/razorpay", authMiddleware, placeOrderRazorpay);

orderRouter.post("/userorders", authMiddleware, userOrders);

module.exports = orderRouter;
