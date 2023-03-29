import React, { useState } from "react";
import TaskForm from "./task-forms";
import '../styles/listTask.css'
import Task from "./task";

function ListTasks() {

    const [tasks, setListTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const tasksCurrent = [task, ...tasks];
            setListTasks(tasksCurrent);
        }
    }

    const deletTask = id =>{
        const tasksCurrent = tasks.filter(task => task.id !== id);
        setListTasks(tasksCurrent);
    }

    const completeTask = id =>{
        const tasksCurrent = tasks.map(task => {
            if(task.id === id){
                task.success = !task.success;
            }
            return task;
        });
        setListTasks(tasksCurrent);
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="task-list-container">
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            success={task.success}
                            completeTask={completeTask}
                            deletTask={deletTask}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ListTasks;