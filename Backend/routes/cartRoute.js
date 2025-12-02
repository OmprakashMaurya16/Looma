const express = require("express");
const {
  addToCart,
  updateCart,
  getUserCart,
} = require("../controllers/cartController");
const authMiddleware = require("../middleware/auth");

const cartRouter = express.Router();

cartRouter.get("/get", authMiddleware, getUserCart);
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/update", authMiddleware, updateCart);

module.exports = cartRouter;
