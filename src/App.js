import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App" class="todo-item" >
      <h1>Todo List</h1>
      <div class="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button></div>
      <TodoList todos={todos} setTodos={setTodos} />
      <div className="counters">
        <p>Total tasks: {todos.length}</p>
        <p>Completed tasks: {completedCount}</p>
      </div>
    </div>
  );
}

export default App;
