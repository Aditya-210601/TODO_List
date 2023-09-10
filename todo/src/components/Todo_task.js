import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import {useDispatch} from "react-redux";
import { useState } from "react";

const Todo_task = ({ todo }) =>
{
    const dispatch = useDispatch();
    const [editing,setEditing] = useState(false);
    const [text,setText] = useState(todo.data);

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        setEditing(prevstate => !prevstate);

        dispatch(updateTodo(todo._id,text));
    }

    return <li 
        class='task' 
        onClick={()=> dispatch(toggleTodo(todo._id))}
        style={{
            textDecoration: todo.done ? 'line-through' : '',
            color: todo.done ? '#bdc3c7' : '#34495e'
        }}
        >
        <span style={{ display: editing ? 'none':''}}>{todo.data}</span>

        <form
            style={{display: editing ? 'inline':'none'}}
            onSubmit={onFormSubmit}>
            <input 
                type="text"
                value={text}
                className="edit-todo"
                onChange={(e) => setText(e.target.value)}/>
        </form>

        <span class="icon" onClick={()=>setEditing(prevstate=>!prevstate)}>
            <i class="fa fa-pen" />
        </span>
        <span class="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
            <i class="fa fa-trash" />
        </span>
    </li>
}
export default Todo_task;