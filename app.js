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

// ###################### middleWare #############################

// const express = require("express");

// const app = express();

// app.use("/", (req, res, next) => {
//   console.log("In the middleware1");
//   console.log("This always runs");
//   next();
// });

// app.use('/add-product', (req, res, next)=>{
//   console.log("In the middleWare2");
//   res.send(`<h1>The "add product" page</h1>`);
// });

// app.use('/', (req, res, next)=>{
//   console.log("In the middleWare3");
// });

// app.listen(3000);
