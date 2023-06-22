const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Logging
app.use(logger("dev"));

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});