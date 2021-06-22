const router = require("express").Router();
const { Workout } = require("../models");


// Get last workout
router.get("/", async (req, res) => {
  try {
    const workoutData = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    res.json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new workout
router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workout.create({});
    console.log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// updates to a workout
router.put("/:id", async (req, res) => {
  try {
    const newWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          exercises: req.body,
        },
      },
      { new: true, runValidators: true }
    );
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
    
});

// Get data for range
router.get("/range", async (req, res) => {
  try {
    const workoutData = await Workout([
      { $addFields: { totalDuration: { $sum: "$exercise.duration" } } },
    ]);
    res.json(workoutData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;
