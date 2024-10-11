import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task">
    <div className="tasks">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleTaskCompletion}
        className="input"
      />
      <h3>{task.text}</h3>
    </div>
      <button onClick={deleteTask} className="remove-button">Remove</button>
    </li>
  );
}

export default Task;
