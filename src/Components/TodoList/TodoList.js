import React from 'react';
import './TodoList.css';
import { TodoItem } from '../index.js';

const TodoList = ({ todos, setTodos, statusFilter, filteredTodo }) => {
    const handleDeleteAll = () => {
        setTodos(
            todos.filter(todo => todo.completed === false)
        )
    }

    return(
        <div className="todoList">
            {
                filteredTodo.map((element) => {
                    return (
                        <TodoItem key={element.id} statusFilter={statusFilter} todo={element} todos={todos} setTodos={setTodos}/>
                    )
                })
            }
            {
                statusFilter === "Completed" ? (
                    <div className="todoList--btn">
                        <button className="btn--delete"
                            onClick={handleDeleteAll}
                        >
                            <span className="material-icons todoItem--trashIcon">delete_outline</span>
                            delete all
                        </button>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}

export default TodoList;
