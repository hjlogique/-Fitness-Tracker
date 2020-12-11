

// ::::::::::  api-routes.js  :::::::::: 

const db = require("../models");
const mongoose = require("mongoose");

String.prototype.toObjectId = function () {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};

// Route for API workouts
module.exports = function (app) {
    // GET route: Query all workouts
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .sort({ "day": 1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // GET route: Query workouts data from a specific range
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
            .sort({ "day": 1 })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // POST route: Submit new completed workouts
    app.post("/api/workouts", function (req, res) {
        const workout = new db.Workout();
        db.Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // PUT route: Add new workouts
    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.update({
            _id: req.params.id.toObjectId()
        }, {
            $push: { exercises: req.body }
        })
            .then(function (data) {
                res.json(data);
            })
    });

}