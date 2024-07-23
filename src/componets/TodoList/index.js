import React from 'react'
import propTypes from 'prop-types'
import { MdDelete } from "react-icons/md";

import "./styles.css"


const TodoList = ({ todos, onToggle, onRemove}) => {
    return (
        <ul className="todolist">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span onClick={() => onToggle(todo)} role="button" tabIndex={0} className={['todo', todo.checked ? 'checked' : ''].join(' ')}>{todo.title}</span>
                        <button onClick={() => onRemove(todo)}  className="remove" type="button"><MdDelete  size={28} /></button>
                </li>
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        checked: propTypes.bool.isRequired,
        }).isRequired).isRequired,
    onToggle: propTypes.func.isRequired,
    onRemove:propTypes.func.isRequired,
}

export default TodoList
