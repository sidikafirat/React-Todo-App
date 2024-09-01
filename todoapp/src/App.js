import './App.css';
import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import ImageComponent from './components/ImageComponent';

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const createTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: nextId };
    setTodos([...todos, todoWithId]);
    setNextId(nextId + 1);
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === updatedTodo.id ? { ...todo, content: updatedTodo.content } : todo
    );
    setTodos(updatedTodos);
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  const moveTodoUp = (index) => {
    if (index > 0) {
      const newTodos = [...todos];
      [newTodos[index], newTodos[index - 1]] = [newTodos[index - 1], newTodos[index]];
      setTodos(newTodos);
    }
  }

  const moveTodoDown = (index) => {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
      setTodos(newTodos);
    }
  }

  return (
    <div className="App">
      <ImageComponent />
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList 
          todos={todos} 
          onRemoveTodo={removeTodo} 
          onUpdateTodo={updateTodo} 
          toggleComplete={toggleComplete} 
          moveTodoUp={moveTodoUp}
          moveTodoDown={moveTodoDown}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
