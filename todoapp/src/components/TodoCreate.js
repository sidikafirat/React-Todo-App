import React, { useState } from 'react';
import '../App.css';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const clearInput = () => {
    setNewTodo('');
  }

  const createTodo = () => {
    if (!newTodo.trim()) return; // Boş todo'ları eklemeyi önler
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo.trim() // Trimlenmiş içerik ekler
    }
    onCreateTodo(request);
    clearInput();
  }

  return (
    <div className='todo-create'>
      <div className="background-text">i feel lucky</div>
      <div className='header'> 
        <h2>todos</h2>
      </div>
      <input 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className='todo-input' 
        type='text' 
        placeholder='What needs to be done?'
      />
      <button onClick={createTodo} className='todo-button'>Create Todo</button>
    </div>
  )
}

export default TodoCreate;
