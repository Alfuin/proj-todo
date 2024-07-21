import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

const App = () => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const erase = () => {
        setValue('');
    }

    const submit = () => {
        setTodos([...todos, { id: new Date().getTime, title: value, checked: false}]);
        erase();
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
        } else if(event.which === ESCAPE_KEY){
            erase();
        }
    };

    const onToggle = (todo) => {
        setTodos(todos.map((obj) => (obj.id === todo.id ? {...obj, checked: !todo.checked} : obj)));
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => (obj.id !== todo.id)));
    }

    return(
        <section id="app" className="container">
            <header>
                <h1 className="princ">todo</h1>
            </header>
            <section className="main">
                <input className="newtodo" placeholder="o que precisa ser feito?" value={value} onChange={onChange} onKeyDown={onKeyDown} />
                <ul className="todolist">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span onClick={() => onToggle(todo)} role="button" tabIndex={0} className={['todo', todo.checked ? 'checked' : ''].join(' ')}>{todo.title}</span>
                            <button onClick={() => onRemove(todo)}  className="remove" type="button"><MdDelete  size={28} /></button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default App;
