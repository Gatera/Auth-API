const express = require("express");

const app = express();
const port = 3000;

//Import routes
const authRoute = require("./routes/auth");

//Route middlewares
//this sets the fixed path to http://localhost/api/user
app.use("/api/user", authRoute);

app.listen(port, () => console.log("Server is running on port: " + port));
