const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Looma");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
