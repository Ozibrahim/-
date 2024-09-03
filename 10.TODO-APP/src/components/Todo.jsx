import { IoMdRemoveCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import '../App.css'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";



function Todo({ todo, onRemoveTodo,onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo,setNewTodo]=useState(content)

   
    const removeTodo = () => {
        onRemoveTodo(id);
    }


    const updateTodo = ()=>{
        const request = {
            id : id,
            content : newTodo
        }
        onUpdateTodo(request);
        setEditable(false);

    }

    return (
        <div className="todo-main">
            <div>
                {editable ? <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className="todo-input" type="text" style={{width:'350px'}}/> : content}

            </div>
            <div className='todo-icons'>
                <IoMdRemoveCircle onClick={removeTodo} />
                {editable ? <FaCheckCircle onClick={updateTodo} /> : <MdModeEdit onClick={() => setEditable(true)} />}
                

            </div>

        </div>
    )

}


export default Todo