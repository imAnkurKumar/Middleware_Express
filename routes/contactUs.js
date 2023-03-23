const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactUs");

router.get("/contactUs", contactController.contactController);

router.post("/contactUs", contactController.contactUsPost);

router.get("/success", contactController.getSuccess);

module.exports = router;
