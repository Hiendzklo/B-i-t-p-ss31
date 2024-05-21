import React from 'react';
import './styles.css';

interface TodoItemProps {
  todo: string;
  index: number;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, onDelete, onEdit }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span>{todo}</span>
      <div className="actions">
        <button className="edit" onClick={() => onEdit(index)}>✏️</button>
        <button className="delete" onClick={() => onDelete(index)}>🗑️</button>
      </div>
    </div>
  );
};

export default TodoItem;
