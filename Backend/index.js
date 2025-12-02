const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Looma");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
