const mongoose = require('mongoose');
const Workout = require('../models/Workout');
require('dotenv').config();

const workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: 'resistance',
        name: 'Quad Press',
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
];

// connect to database and insert seed data (re-wrote this)
mongoose
    .connect(process.env.WORKOUT_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .then(async () => {
        // tell user what's going on
        console.log('Connected to MONGO')
        console.log('Deleting existing records before seeding...')

        // delete existing data
        await Workout.deleteMany({});
        // seed collection
        console.log('Inserting seed data...');
        const insertData = await Workout.collection.insertMany(workoutSeed);

        console.log(insertData.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
      // display any errors
      console.error(err);
      process.exit(0);
    });