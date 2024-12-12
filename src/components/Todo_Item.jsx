import React from "react";
import './Todo_Item.css'
function Task({ task, index, DoneTask, removeTask}){
    return(
        <div className="task" style={{ textDecoration: task.DoneTask ? "line-through" : ""}}
        >
         {task.title}
         
         <button className="button1" onClick={() => DoneTask(index)}>Complete</button>
          <button className="button2"  onClick={() => removeTask(index)}>X</button>
        </div>
    )
}

export default Task
