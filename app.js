const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const error = require("./controllers/error");
const adminRouters = require("./routes/admin");
const contactUsRoutes = require("./routes/contactUs");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouters);
app.use(contactUsRoutes);
app.use(shopRoutes);
app.use(error.error);
app.listen(3000);
