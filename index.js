const express = require("express");
const http = require("http");
const app = express();

app.use((req, res, next) => {
  console.log("inside middleware");
  next();
});

app.use((req, res, next) => {
  console.log("inside middleware2");
  res.send("<h1>Hello from express</h1>")
});

http.createServer(app);
// app.listen(4000);
