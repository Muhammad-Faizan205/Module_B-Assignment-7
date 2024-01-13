import React from 'react';
import Todo_item from './Todo_item_component';

const Todo_list = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <Todo_item key={index} task={task} onEdit={() => onEditTask(index)} onDelete={() => onDeleteTask(index)} />
      ))}
    </ul>
  );
};

export default Todo_list;
