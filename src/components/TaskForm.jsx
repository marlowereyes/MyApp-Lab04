import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="new task ..."
        className="input"
      />
      <button type="submit" className="save-button">Save</button>
    </form>
  );
}

export default TaskForm;
