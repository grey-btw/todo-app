import React, { useState, useEffect} from 'react';
import './App.css';
import { Form, TodoList } from './Components';

function App() {
  const [statusFilter, setstatusFilter] = useState('All');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    getValueFromLocal();
  }, [])

  useEffect(() => {
    filterTodo();
    saveToLocal();
  }, [statusFilter, todos])


  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  const getValueFromLocal = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
        let localTodo = localStorage.getItem('todos', JSON.stringify(todos));
        setTodos(JSON.parse(localTodo));
    }
  }

  const filterTodo = () => {
    switch(statusFilter) {
      case 'Completed': {
        setFilteredTodo(todos.filter((e) => e.completed === true));
        break;
      }
      case 'Active': {
        setFilteredTodo(todos.filter((e) => e.completed === false));
        break;
      } 
      default:
        setFilteredTodo(todos);
    }
  }

  return (
    <div className="container">
      <h1>#todo</h1>
      <Form 
        statusFilter={statusFilter} setstatusFilter={setstatusFilter}
        input={input} setInput={setInput}
        todos={todos} setTodos={setTodos}
      />
      <TodoList 
        statusFilter={statusFilter} todos={todos} setTodos={setTodos} filteredTodo={filteredTodo}
      />
    </div>
  );
}

export default App;
