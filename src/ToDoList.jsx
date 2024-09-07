import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([
    { task: 'walk the dog', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, { task: newTask, completed: false }]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleTaskCompletion(index) {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="to-do-list">
      <h1>Your Todo list:</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span
                className="text"
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.task}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
