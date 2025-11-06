import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as workout from './workout_model.mjs';

const app = express();
app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await workout.connect()
    console.log(`Server listening on port ${PORT}...`);
});

app.post('/exercises', asyncHandler(async (req, res) => {
    const {name, reps, weight, unit, date} = req.body;

    try {
        const newWorkout = await workout.createWorkout(name, reps, weight, unit, date);
        res.status(201).json(newWorkout);
    } catch (err) {
        res.status(400).json({error: err.message});
    }

}));

app.get('/exercises', asyncHandler(async (req, res) => {
    const allWorkouts = await workout.getAllWorkouts();
    res.status(200).json(allWorkouts);
}));


app.get('/exercises/:_id', asyncHandler(async (req, res) => {

    const { _id } = req.params;

    try {
        const foundWorkout = await workout.findWorkoutID(_id);
        if(foundWorkout) {
            res.status(200).json(foundWorkout);
        } else {
            res.status(404).json({error: 'Workout not found'})
        }
    } catch (err) {
        res.status(404).json({error: err.message});
    }
    
}));

app.put('/exercises/:_id', asyncHandler(async (req, res) => {

    const { _id } = req.params;
    const {name, reps, weight, unit, date} = req.body;

    try {
        const updatedWorkout = await workout.updateByID(_id, name, reps, weight, unit, date);
        if(updatedWorkout) {
            res.status(200).json(updatedWorkout);
        } else {
            res.status(404).json({error: 'Workout not found'});
        }
    } catch (err) {
        res.status(404).json({error: err.message});
    }
}));


app.delete('/exercises/:_id', asyncHandler(async (req, res) => {
    const { _id } = req.params;

    try {
        const deletedWorkout = await workout.deleteWorkoutByID(_id);
        if(deletedWorkout) {
            res.status(204).json('Workout deleted');
        } else {
            res.status(404).json({error: 'Workout not found'});
        }
    } catch (err) {
        res.status(404).json({error: err.message});
    }

}));