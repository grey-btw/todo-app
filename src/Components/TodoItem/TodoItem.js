import React from 'react';
import './TodoItem.css';

const TodoItem = ({ statusFilter, todo, todos, setTodos }) => {
    const handleComplete = () => {
        setTodos(
            todos.map(element => {
                if(element.id === todo.id) {
                    return {
                        ...element, completed: !todo.completed
                    };
                }
                return element;
            })
        )
    }
    const handleDelete = () => {
        setTodos(
            todos.filter(element => element.id !== todo.id)
        )
    }
    return(
        <div className="todoItem"> 
            <div className="todoItem--left">
                {todo.completed ? (
                    <input type="checkbox" className="todoItem--checkbox"
                        onClick={handleComplete}
                        checked="checked"
                    />
                ) : (
                    <input type="checkbox" className="todoItem--checkbox"
                        onClick={handleComplete}
                    />
                )}

                <p className={`todoItem--content ${todo.completed ? 'stroke' : ''}`}>
                    {todo.text}
                </p>
            </div>
            <div  className="todoItem--right">
                {statusFilter === "Completed" ? (
                    <span className="material-icons todoItem--trashIcon"
                        onClick={handleDelete}
                    >delete_outline</span>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default TodoItem;
