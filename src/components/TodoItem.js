import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? '❌' : '✓'} 
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
