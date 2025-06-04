import React, { useState } from 'react';
import Form from './components/TaskForm';
import List from './components/TaskList';
import Filter from './components/FilterBar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.duration === filter);

  return (
    <div className="app">
      <div className="hero">
        <Form onAddTask={addTask} />
      </div>
      <Filter currentFilter={filter} setFilter={setFilter} />
      <List tasks={filteredTasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default App;
