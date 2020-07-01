const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//Import routes
const authRoute = require("./routes/auth");

const app = express();
const port = 3000;
dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);
//Middleware
app.use(express.json());

//Route middlewares
//this sets the fixed path to http://localhost/api/user
app.use("/api/user", authRoute);

app.listen(port, () => console.log("Server is running on port: " + port));
