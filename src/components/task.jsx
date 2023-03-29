import React from "react";
import '../styles/task.css';
import { AiFillDelete } from "react-icons/ai";

function Task( { id, text, success, completeTask, deletTask } ){
    return(
        <div className={success ? 'task-container success' : 'task-container'}>
        <div 
        className="task-text"
        onClick={() => completeTask(id)}>
            {text}
        </div>
        <div className="task-contianer-icon"
        onClick={() => deletTask(id)}>
            <AiFillDelete className="task-icon" />
        </div>
        </div>
    );
}

export default Task;