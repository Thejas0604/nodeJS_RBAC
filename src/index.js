const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();

dbConnect();
const app = express();

//middlewares
app.use(express.json());

//routes

//start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
