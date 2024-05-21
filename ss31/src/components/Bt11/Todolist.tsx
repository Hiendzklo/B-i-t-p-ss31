import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Modal from './Modal';
import './styles.css';

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  const handleAddTodo = () => {
    if (!newTodo) {
      setError('Tên công việc không được để trống');
      return;
    }

    if (todos.includes(newTodo)) {
      setError('Tên công việc không được phép trùng');
      return;
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setNewTodo('');
    setError('');
  };

  const handleDeleteTodo = (index: number) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const confirmDeleteTodo = () => {
    if (deleteIndex !== null) {
      const updatedTodos = todos.filter((_, i) => i !== deleteIndex);
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setIsModalOpen(false);
      setDeleteIndex(null);
    }
  };

  const cancelDeleteTodo = () => {
    setIsModalOpen(false);
    setDeleteIndex(null);
  };

  return (
    <div className="container">
      <h2>Danh sách công việc</h2>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Thêm</button>
      {error && <p className="error">{error}</p>}
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onDelete={handleDeleteTodo}
          onEdit={() => {}}
        />
      ))}
      <p>Công việc đã hoàn thành: {todos.length}</p>
      <Modal
        show={isModalOpen}
        message={`Bạn có xác nhận xóa công việc <${todos[deleteIndex || 0]}> không?`}
        onConfirm={confirmDeleteTodo}
        onCancel={cancelDeleteTodo}
      />
    </div>
  );
};

export default Todolist;
