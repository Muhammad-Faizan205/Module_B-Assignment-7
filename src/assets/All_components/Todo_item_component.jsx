// TaskItem.js
import React from 'react';

const Todo_item = ({ task, onEdit, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task}
      <div>
        <button className="btn btn-primary btn-sm mx-1" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo_item;
