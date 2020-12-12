
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

// Calculate and create the virtual totalDuration property 
// dynamically and add it to the schema
WorkoutSchema.virtual("totalDuration").get(function () {
    // Return sums of durations 
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// Create the virtual dayOtweek property dynamically and
// add it to the schema
WorkoutSchema.virtual("dayOfWeek").get(function () {
    const dayNames = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    const dayOfWeek = this.day.getDay();
    return dayNames[dayOfWeek];
  });
  
// Calculate and create the virtual totalWeight property 
// dynamically and add it to the schema
WorkoutSchema.virtual("totalWeight").get(function () {
    let totalWeight = 0;
    for (let i = 0; i < this.exercises.length; i++) {
      if (typeof this.exercises[i].weight === "number") {
        totalWeight += (this.exercises[i].weight * this.exercises[i].reps * this.exercises[i].sets);
      }
    }
    return totalWeight;
  });

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;