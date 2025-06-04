import React, { useState, useEffect } from 'react';
import Form from './components/TaskForm';
import List from './components/TaskList';
import Filter from './components/FilterBar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(prev => prev.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter(task => task.duration === filter);

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
