const express = require("express");
const router = express.Router();

const getProducts = require("../controllers/admin");

router.get("/add-product", getProducts.getProducts);

router.post("/add-product", getProducts.ProductsPost);

module.exports = router;
