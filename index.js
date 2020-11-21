const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;


const db = require('./db');
const UserRoute = require('./Routes/User');

require("dotenv").config();
app.use(cors());
app.use(express.json());


// serve static assets

app.get("/", function (req, res) {
  res.send("hello world");
});
app.use('/user',UserRoute);


app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});