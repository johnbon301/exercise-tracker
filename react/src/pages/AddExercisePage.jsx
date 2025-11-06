import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date};
        const response = await fetch(
            `/exercises`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newExercise)
            }
        );
        if(response.status === 201) {
            alert('Exercise added successfully');
            navigate('/');
        } else {
            alert('Error adding exercise');
        }

    };

    return (
        <div className='add-exercise'>
            <h1 className='add-header'>Add Exercise</h1>
            <p>Fill in Your Workout!</p>
            <input
                type="text"
                placeholder="Enter Name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                min="0"
                value={reps}
                placeholder="Enter Reps here"
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                min="0"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.valueAsNumber)} />

            <select
                value={unit}
                onChange={e => setUnit(e.target.value)}>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input
                type="text"
                placeholder="Enter date here: MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;