import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit, FaCheck } from "react-icons/fa";
import '../App.css';

function Todo({ todo, onRemoveTodo, onUpdateTodo, toggleComplete, index, moveTodoUp, moveTodoDown }) {
  const { id, content, completed } = todo;

  const [editable, setEditable] = React.useState(false);
  const [newTodo, setNewTodo] = React.useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
      border: '1px solid lightgray', padding: '10px', marginTop: '10px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => toggleComplete(id)} 
          style={{ marginRight: '10px' }} 
        />
        <span style={{ marginRight: '10px', fontWeight: 'bold' , color:'rgb(7, 38, 95)'}}>
          {index + 1}. 
        </span>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
  {
    editable 
      ? <input 
          value={newTodo || ''} 
          onChange={(e) => setNewTodo(e.target.value)} 
          style={{ width: '380px' }} 
          className='todo-input' 
          type='text' 
        /> 
      : content
  }
</span>


      </div>
      <div>
        <CiCircleRemove className='todo-icons' onClick={removeTodo} />
        {
          editable 
            ? <FaCheck className='todo-icons' onClick={updateTodo} /> 
            : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
        }
        <button onClick={moveTodoUp} className='yerdegistirme'>▲</button>
        <button onClick={moveTodoDown} className='yerdegistirme'>▼</button>
      </div>
    </div>
  );
}

export default Todo;
