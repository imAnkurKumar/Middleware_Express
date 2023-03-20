const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
router.get("/contactUs", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

router.post("/contactUs", (req, res, next) => {
  res.redirect("/success");
});

router.get("/success", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
