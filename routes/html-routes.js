
// ::::::::::  html-routes.js  :::::::::: 

const path = require("path")

// Routes for html pages
module.exports = function (app) {

    // Get route: Load index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Get route: Load exercise.html
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Get route: Load stats.html
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};