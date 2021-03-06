const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date, 
        default: Date.now
    },
    exercises: {
        type: Array, 
        default: [],
        require: true
    }
});

module.exports = mongoose.model('Workout', WorkoutSchema);