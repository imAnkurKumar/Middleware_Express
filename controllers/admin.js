const Product = require("../models/admin");
const path = require("path");
const rootDir = require("../util/path");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
};

exports.ProductsPost = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(product);
  res.redirect("/");
};
