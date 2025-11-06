import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";import '../App.css';
function ExerciseItem({ exercise, onDelete, onEdit }) {


    return (
        <tr className="collection-item">
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <button onClick={e => { e.preventDefault(); onEdit(exercise); }}>
                    <CiEdit />
                </button>
            </td>
            <td>
                <button onClick={e => { e.preventDefault(); onDelete(exercise._id); }}>
                    <MdDelete />
                </button>
            </td>
        </tr>
    );
}

export default ExerciseItem;