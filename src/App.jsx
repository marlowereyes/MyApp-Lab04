import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false }
  ]);

  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const remainingTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="content-container">
      <div>
        <h1>Daily Planner</h1>
        <TaskForm addTask={addTask} />
        <h2>You have {remainingTasksCount} tasks remaining</h2>
        <ul>
          {tasks.map((task, index) => (
            <Task 
              key={index}
              task={task}
              toggleTaskCompletion={() => toggleTaskCompletion(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
