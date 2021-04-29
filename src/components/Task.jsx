import React from 'react';
import "./Task.css";

const Task  = ({task, handleTaskClick}) => {
    

    return (
        <div className="task-container" 
        style={task.completed ? {borderLeft: '6px solid rgb(0, 110, 255) '} : { }}>

            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
            </div>

        </div>
    );
    

    
    //return (<div className="task-container"> {task.title}</div>  );
};
 
export default Task;

