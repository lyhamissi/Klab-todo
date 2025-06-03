import React, { useState } from 'react';
import '../styles/list.css';
import { FaPen, FaCheck  } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
const List = ({ tasks, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null); // setting function to be used while editing the task
  const [editedText, setEditedText] = useState('');// setting function for editing the task name
  const [editedDuration, setEditedDuration] = useState('');// setting the function for editing the duration for the task

  const startEdit = (task) => {
    setEditId(task.id);// to update the id of the task to be updated/ edited
    setEditedText(task.text);//for editing the task name
    setEditedDuration(task.duration); // for editing the duration for the task
  };

  const handleUpdate = () => {// the funstion to handle the process of updating
    onUpdate({ id: editId, text: editedText, duration: editedDuration });// we include the updated content in this to make the data updated
    setEditId(null);//we ignore the Id inputed by the user to avoid conflicts
  };

  return (
    <ul className="task-list">

      {/*EDITING */}
      {tasks.map((task, index) => (   // this is for listing the tasks added in the array
        <li key={task.id} className="task-item">
          <span className="task-number">{index + 1}</span> {/* this is for making the Id increment itself */}
          {editId === task.id ? (// to store the id of the task to be updated id edit is clicked
            <>
              <input value={editedText} onChange={e => setEditedText(e.target.value)} className='task'/> {/* this is the input that will be displayed if the user clicks to the edit icon */}
              <select value={editedDuration} onChange={e => setEditedDuration(e.target.value)}> {/* this is the select for the duration that will be displayed after clicking to edit */}
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <button onClick={handleUpdate}><FaCheck/>Update</button>{/* this is the button that will be clicked on to handle the updation for the data */}
            </>
          ) : (
            // Displaying
            <>
              <span className="task-text">{task.text}</span>{/* For displaying the task names */}
              <div className="buttons">
              <button onClick={() => startEdit(task)} className='edit'><FaPen/></button> {/*edit button where if clicked it will execure the startEdit function */}
              <button onClick={() => onDelete(task.id)} className='delete'><IoTrashBin/></button>{/* delete button where if clicked it will execute the onDelete function to delete the task clicked*/}
            </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
