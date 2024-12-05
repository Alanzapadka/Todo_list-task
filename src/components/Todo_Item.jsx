import React from "react";

function Task({ task, index, DoneTask, removeTask}){
    return(
        <div className="task" style={{ textDecoration: task.DoneTask ? "line-through" : ""}}
        >
         {task.title}
         
         <button onClick={() => DoneTask(index)}>Complete</button>
          <button style={{backgound: "red"}} onClick={() => removeTask(index)}>X</button>
        </div>
    )
}

export default Task
