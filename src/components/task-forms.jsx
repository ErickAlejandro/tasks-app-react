import {React , useState} from "react";
import '../styles/taskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState('');

    const change = e =>{
        setInput(e.target.value);
    }

    const sendTask = e =>{
        e.preventDefault();

        const taskNew = {
            id: uuidv4(),
            text: input,
            complete: false
        }

        props.onSubmit(taskNew);
    }

    return(
        <form className="task-form"
        onSubmit={sendTask}>
            <input 
                className="task-input"
                type='text'
                placeholder="Escribe una tarea"
                name="text"
                onChange={change}
            />
            <button className="task-button">Agregar Tarea</button>
        </form>
    )
}

export default TaskForm;