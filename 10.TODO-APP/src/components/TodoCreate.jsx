import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput=()=>{
        setNewTodo('');

    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();

    }

    return (
        <div className='todo-create'>
            <input type="text" className='todo-input' placeholder='Todo giriniz' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={createTodo} className='todo-btn'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate