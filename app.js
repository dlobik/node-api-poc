const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//import routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(3000);
