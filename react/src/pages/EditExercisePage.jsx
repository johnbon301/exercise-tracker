import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const EditExercisePage = ({EditToExercise}) => {

    const [name, setName] = useState(EditToExercise.name);
    const [reps, setReps] = useState(EditToExercise.reps);
    const [weight, setWeight] = useState(EditToExercise.weight);
    const [unit, setUnit] = useState(EditToExercise.unit);
    const [date, setDate] = useState(EditToExercise.date);

    const navigate = useNavigate();

    const EditExercise = async () => {
        const EditedExercise = { name, reps, weight, unit, date};
        const response = await fetch(
            `/exercises/${EditToExercise._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(EditedExercise)
            }
        );
        if(response.status === 200) {
            alert('Exercise edited successfully');
            navigate('/');
        } else {
            alert('Error editing exercise');
        }

    };

    return (
        <div className='edit-exercise'>
            <h1 className='edit-header'>Edit Exercise</h1>
            <p>Edit your workout</p>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                min="0"
                value={reps}
                onChange={e => setReps(e.target.valueAsNumber)} />
            <input
                type="number"
                min="0"
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
                onClick={EditExercise}
            >Update</button>
        </div>
    );
}

export default EditExercisePage;