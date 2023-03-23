const path = require("path");
const rootDir = require("../util/path");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
};

exports.getProductsPost = (req, res, next) => {
  // console.log(req.body);
  res.redirect("/");
};
