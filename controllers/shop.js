const path = require("path");
const rootDir = require("../util/path");

exports.shops = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
