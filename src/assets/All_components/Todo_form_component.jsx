import React, { useState } from 'react';

const Todo_form = ({ onAddTask, onDeleteAllTasks }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className="input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add
      </button>
      <button className="btn btn-danger" onClick={onDeleteAllTasks}>
        Delete All
      </button>
    </div>
  );
};

export default Todo_form;
