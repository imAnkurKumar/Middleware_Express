const express = require("express");
const router = express.Router();
const shops = require("../controllers/shop");

router.get("/", shops.shops);

module.exports = router;
