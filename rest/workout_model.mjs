// Get the mongoose object
import mongoose from 'mongoose';
import 'dotenv/config';
import { query } from 'express';

const WORKOUT_DB_NAME = 'exercises_db';
const WORKOUT_COLLECTION = 'exercises';
const WORKOUT_CLASS = 'Exercise';

let connection = undefined;
let Workout = undefined;

/**
 * This function connects to the MongoDB server.
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        Workout = createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

function createModel() {
    const workoutSchema = mongoose.Schema ({
        name: {type: String, required: true},
        reps: {type: Number, required: true, min: 1},
        weight: {type:Number, required: true, min: 1},
        unit: {type: String, required: true, enum: ['kgs', 'lbs']},
        date: {type: String, required: true, validate: /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-[0-9]{2}$/},
    });

    return mongoose.model(WORKOUT_CLASS, workoutSchema);
}

async function createWorkout(name, reps, weight, unit, date) {
    const newWorkout = new Workout({name, reps, weight, unit, date});
    await newWorkout.save();
    return newWorkout;
}

async function getAllWorkouts() {
    return await Workout.find({});
}

const findWorkoutID = async (_id) => {
    return await Workout.findById(_id);
}

const updateByID = async (_id, name, reps, weight, unit, date) => {
    return await Workout.findByIdAndUpdate(_id, {name, reps, weight, unit, date}, {new: true});
}

    
const deleteWorkoutByID = async (_id) => {
    return await Workout.findByIdAndDelete(_id);
}


export { connect, createModel, createWorkout, getAllWorkouts, findWorkoutID, deleteWorkoutByID, updateByID};