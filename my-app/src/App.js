import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(''); // To hold the input value
  const [todos, setTodos] = useState([]); // To store the list of tasks

  // Handle task input change
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, isCompleted: false }]);
      setTask(''); // Clear the input field
    }
  };

  // Toggle task completion
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.isCompleted ? 'completed' : ''}>
            <span
              onClick={() => toggleCompletion(index)}
              style={{ cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
