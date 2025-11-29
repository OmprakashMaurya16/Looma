const express = require("express");
const {
  listProduct,
  singleProduct,
  addProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../middleware/multer");

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/delete", deleteProduct);
productRouter.get("/single", singleProduct);
productRouter.get("/list", listProduct);

module.exports = productRouter;
