const router = require("express").Router();
const db = require("../models/");

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log("/api/workouts req.body", req.body);
  db.Workout.create({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => {
      console.log("err", err);
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => res.json(data))
    .catch(err => {
      console.log("err", err);
      res.json(err);
    });
});

module.exports = router;
