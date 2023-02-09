const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRouters = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouters);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000);
