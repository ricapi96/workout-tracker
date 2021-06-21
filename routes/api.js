const router = require("express").Router();
// const { db } = require("../models/workout");
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

// Add new exercise
router.put("/workouts/:id", (req, res) => {
  id = mongojs.ObjectId(req.params.id);
  db.workouts.update(
    {
      _id: id,
    },
    {
      $push: {
        exercises: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
          distance: req.body.distance,
        },
      },
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

router.get("/workouts/range", (req, res) => {
    db.workouts.find(), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    };
})

module.exports = router;
