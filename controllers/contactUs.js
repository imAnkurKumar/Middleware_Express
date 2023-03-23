const path = require("path");
const rootDir = require("../util/path");

exports.contactController = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
};

exports.contactUsPost = (req, res, next) => {
  res.redirect("/success");
};

exports.getSuccess = (req, res, next) => {
  // console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
