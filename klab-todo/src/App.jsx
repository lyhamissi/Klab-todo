import React, { useState } from 'react';
import Form from './components/TaskForm';
import List from './components/TaskList';
import Filter from './components/FilterBar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]); // to handle the tasks added
  const [filter, setFilter] = useState('All'); // to handle fitering process

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  }; // to handle the addition of the tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };// to handle the deletion of the tasks

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  }; // to handle the updation for the tasks

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.duration === filter);// if the filter option is set to All it will display all tasks added regardless of it's duration

  return (
    <div className="app">
      <div className="hero">
        <Form onAddTask={addTask} />{/*form with addTask function */}
      </div>
      <Filter currentFilter={filter} setFilter={setFilter} /> {/*Filter bar with filtering process */}

      <List tasks={filteredTasks} onDelete={deleteTask} onUpdate={updateTask} />{/*List with the delete and update functions */}
    </div>
  );
};

export default App;
