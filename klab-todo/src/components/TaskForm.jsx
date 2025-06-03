import React, { useState } from 'react';
import '../styles/task.css'
const Form = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [duration, setDuration] = useState('Duration');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAddTask({ text, duration });
        setText('');
    };

    return (
        <div>
            <div className="navbar">
                <h1>Make a <span className="highlight">better</span> plan <br /> for your life</h1>
                 </div>
            <form className="task-form" onSubmit={handleSubmit}>
                <p>Whoever you are , Whatever you are looking for, we <br /> have the perfect place for you</p>
                <select value={duration} onChange={e => setDuration(e.target.value)}>
                    <option>Duration</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </select>
                <input type="text" className="task" value={text} onChange={e => setText(e.target.value)} placeholder="Task" />
                <button type="submit">Add task</button>
            </form>
        </div>
    );
};

export default Form;
