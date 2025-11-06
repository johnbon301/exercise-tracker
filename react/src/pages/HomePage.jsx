import { Link } from 'react-router-dom';
import ExerciseCollection from '../components/ExerciseCollection';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function HomePage({setEditToExercise}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();


    const loadExercise = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();

        setExercises(data);

    }

    useEffect(() => {
        loadExercise();
    }, []);

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            { method: 'DELETE' }
        );
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            alert(`Error deleting exercise with the _id = ${_id}, status code = ${response.status}`);
        }
     }

    const onEdit = async (exercise) => {
        setEditToExercise(exercise);
        navigate('/edit-exercise');
    }


    return (
        <>         
            <ExerciseCollection exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseCollection>
        </>
    );
}

export default HomePage;