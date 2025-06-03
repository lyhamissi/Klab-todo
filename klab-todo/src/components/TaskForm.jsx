import React, { useState } from 'react';
import '../styles/task.css'
const Form = ({ onAddTask }) => {
    const [text, setText] = useState('');  // for user's input to handle task name
    const [duration, setDuration] = useState('Duration');  // for user's selection to handle the duration

    const handleSubmit = (e) => { // this is for handling the user's submission
        e.preventDefault();// this will refresh the form to prevent the data being sent more than once
        if (!text) return;
        onAddTask({ text, duration });//the function will include both the text(task name) and duration
        setText('');
    };

    return (
        <div>
            <div className="navbar">
                <h1>Make a <span className="highlight">better</span> plan <br /> for your life</h1>
                 </div>
            <form className="task-form" onSubmit={handleSubmit}>
                {/* we will use the {handleSubmit} function so that we can use it in our form for the data to be submitted */}
                <p>Whoever you are , Whatever you are looking for, we <br /> have the perfect place for you</p>
                <select value={duration} onChange={e => setDuration(e.target.value)}> {/* to set the value for the user's duration value */}
                    <option>Duration</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </select>
                <input type="text" className="task" value={text} onChange={e => setText(e.target.value)} placeholder="Task" /> {/*to handle user's text input (task name) */}
                <button type="submit">Add task</button>{/*the user will click this button so that the form data will be submitted */}
            </form>
        </div>
    );
};

export default Form;
