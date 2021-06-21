const router = require("express").Router();
const Workout = require("../models/workout");
// const mongojs = require("mongojs");

const dbUrl = "workout" || "mongodb://localhost/workouts";
const collections = ["workouts"];

// const db = mongojs(dbUrl, collections);

// Get last workout
router.get("/workouts", (req, res) => {
  db.workouts.find(),
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    };
});

// Create new workout
router.post("/workouts", (req, res) => {
  db.workouts.insert(
    {
      day: new Date(new Date().setDate(new Date().setDate())),
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
