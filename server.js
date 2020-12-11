
// ::::::::::  server.js  :::::::::: 

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Setup logger and log responses to console
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// MongoDB_URI 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Start server
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});