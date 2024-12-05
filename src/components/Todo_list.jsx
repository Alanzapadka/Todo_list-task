import React, {useEffect, useState} from "react";
import Task from "./Todo_Item";
import CreateTask from "./Task_add";





function Todo_list() {
  const [remaintask, setRemainTask] = useState(0);
  const [list, setList] = useState([
  {
    title: "Clean The Dishes",
    completed: true
  },
 {
  title: "Take Dog Outside",
    completed: true
 }, {
  title: "Water The Plants",
    completed: false
 }]);

 useEffect(() =>{
  setRemainTask(list.filter(task => !task.completed).length)
 })

 const addTask = title => {
  const taskNew = [...list, {title, completed: false}]
  setList(taskNew)
 };

 const doneTask = index =>{
  const taskNew = [...list]
  taskNew[index].completed = true;
  setList(taskNew)
 };
 
 const removeTask = index =>{
  const taskNew = [...list]
  taskNew.splice(index, 1)
  setList(taskNew)
 };

 return(
  <div className="container-todo">
    <div className="todo-header">Pending Task, ({remaintask})</div>
      <div className="Todo_task">
        {list.map((task, index) =>(
        <Task
        task={(task)}
        index ={(index)}
        DoneTask={doneTask}
        removeTask={removeTask}
        key={index}
        />
        ))}
      </div>
      <div className="Createtask">
        <CreateTask addTask={addTask}/>
      </div>
      
  </div>

 )
}


 


export default Todo_list