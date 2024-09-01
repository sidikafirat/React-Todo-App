import React from 'react';
import Todo from './Todo';

function TodoList({ todos, onRemoveTodo, onUpdateTodo, toggleComplete, moveTodoUp, moveTodoDown }) {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>
      {todos.map((todo, index) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          onRemoveTodo={onRemoveTodo} 
          onUpdateTodo={onUpdateTodo} 
          toggleComplete={toggleComplete} 
          index={index}
          moveTodoUp={() => moveTodoUp(index)}
          moveTodoDown={() => moveTodoDown(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
