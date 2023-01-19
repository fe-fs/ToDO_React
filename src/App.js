import { useState } from 'react';//import use state hook
import "./app.css"; //parei 2h
import {Task} from "./Task" //import Task component from Task.js
 

function App() {
  const [TodoList, setTodoList] = useState([]); //set default state to an empty array
  const [NewTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value); //use the event to grab the value of the event
  };

  const addTask = () => { //add task to the array inside the state
    //create obj task with id and task
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1, // if the todo is empty it will be id 1, else it gets the id of the last element from the array and add 1 for the this new one
      taskName: NewTask,
      completed:false,
    };
    setTodoList([...TodoList, task]);
  };

  //LONG VERSION
  // const deleteTask = (taskName) => { //it loops throw the todo list and find only the one with the same name inputed to the array
  //   const newTodoList = TodoList.filter((task) => {
  //     if(task === taskName) {
  //       return false;
  //     }else{
  //       return true;
  //     }
  //   });

  //SHORT VERSION
    const deleteTask = (id) => { //it loops throw the todo list and find only the one with the same name inputed to the array
    setTodoList(TodoList.filter((task) => task.id !== id));//return task that is not exacly the same name as the task inputed

  }
  const completeTask = (id) => {
    setTodoList(TodoList.map((task) => {
      if (task.id === id) {
        return {...task, completed:true};
      }else {
        return task;
      }
    }));
  }
  

  return (
<div className="App">
  <div classlassName="div">
    <div lassName="top">
      <div className="addTask">
        <h2>The ToDo List</h2>
      <input onChange={handleChange} /> {/*when write in the input it update the state newtask and add the todo to the array*/}
        <button onClick={addTask} className="button-53" role="button">Add Task</button> {/*add task to the array */}
      </div>
    </div>
    <div className="middle">
      <div className="sticker">
        {/*show list */}
      {TodoList.map((task) => {
        return <Task taskName={task.taskName}
                     id={task.id}
                     completed = {task.completed} 
                     deleteTask={deleteTask} 
                     completeTask={completeTask}/>;  
    })}
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
