const express = require("express");
const cors = require("cors");
const path = require("path");

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

/* API routes */

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

/* Static builds */

app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.use("/admin", express.static(path.join(__dirname, "../Admin/dist")));

/* React routing */

app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Admin/dist/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
