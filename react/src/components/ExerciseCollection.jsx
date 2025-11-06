import ExerciseItem from './ExerciseItem';
import '../App.css';

function ExerciseCollection({ exercises, onDelete, onEdit}) {
    return (
        <table className="collection-container">
            <thead>
                <tr className='collection-header'>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseItem exercise={exercise} 
                    onDelete={onDelete} onEdit={onEdit} key={i} />)}
            </tbody>
        </table>


    );
}

export default ExerciseCollection;