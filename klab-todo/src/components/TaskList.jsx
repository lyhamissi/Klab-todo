import React, { useState } from 'react';
import '../styles/list.css';
import { FaPen, FaCheck } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const List = ({ tasks, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [editedDuration, setEditedDuration] = useState('');

  const startEdit = (task) => {
    setEditId(task.id);
    setEditedText(task.text);
    setEditedDuration(task.duration);
  };

  const handleUpdate = () => {
    onUpdate({ id: editId, text: editedText, duration: editedDuration });
    setEditId(null);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={task.id} className="task-item">
          <span className="task-number">{index + 1}</span>
          {editId === task.id ? (
            <>
              <input value={editedText} onChange={e => setEditedText(e.target.value)} className='task' />
              <select value={editedDuration} onChange={e => setEditedDuration(e.target.value)}>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
              <button onClick={handleUpdate}><FaCheck />Update</button>
            </>
          ) : (
            <>
              <span className="task-text">{task.text}</span>
              <div className="buttons">
                <button onClick={() => startEdit(task)} className='edit'><FaPen /></button>
                <button onClick={() => onDelete(task.id)} className='delete'><IoTrashBin /></button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
