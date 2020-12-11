
// ::::::::::  workout.js  :::::::::: 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the exercise name"
        },
        duration: {
            type: Number,
            required: "Enter the exercise duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            // Include virtual properties for requested data 
            virtuals: true
        }
    }
);

// Create the totalDuration property dynamically and add it 
// to the schema
WorkoutSchema.virtual("totalDuration").get(function () {
    // Return sums of durations 
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;