import React, { useState } from 'react'
import AddToDo from './components/Addtodo';
import "./App.css";
import Listtodo from './components/Listtodo';
import Stats from './components/Stats';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const completed = true;
  // starting task 
  const initialTodos = [
  {
    id:1,
    task:"learn js & react",
    description:"remember revision is important",
    completed:true
  },
  {
    id:2,
    task:"learn node js",
    description:"remember revision is important..!",
    completed:false
  }
]
  const [todo,setToDo] = useState(initialTodos);

  const [editVal,setEditVal] = useState(null);

  // add function 
  const handleAdd = (input) =>{
    if(!input.task || !input.description){
      alert("task data is required!plz enter");
      return;

    }else if(editVal){
      setToDo((todo)=>todo.map((t)=>t.id === editVal.id ?
      {
        ...t,
        task:input.task,
        description:input.description
      } :t))
      setEditVal(null);

    }else{
      const newTodo = {
        id:Date.now(),
        task:input.task,
        description:input.description,
        completed: false
      } 
      setToDo((prev)=>[...prev,newTodo])
    }
  }

  console.log("todo",todo);

  // edit function 
  const handleEdit = (id)=>{
    const todos = todo.find((t)=>t.id===id);
    setEditVal(todos)
  }

  // delete function 
  const handleDelete = (id) =>{
    setToDo(todo.filter((t)=>t.id !== id));
  }

  const handleToggleTodo = (id)=>{
    setToDo((prev)=>prev.map((todo)=>todo.id === id ? {...todo,completed :!todo.completed} : todo))
  }

  const totalTodos = todo.length

  const completedTodos = todo.filter((t) => t.completed === true).length

  const pendingTodos = totalTodos - completedTodos
  
  return (
    <>
      <div className="app">
        <h1 className='heading'>My To-Do List</h1>
        {/* form , submit function  */}
        <AddToDo handleAdd={handleAdd} editVal={editVal}/>
        {/* stats  */}
        <Stats totalTodos={totalTodos} completedTodos={completedTodos} pendingTodos={pendingTodos}/>
        {/* table  */}
        <Listtodo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleToggleTodo={handleToggleTodo}/>
      </div>
    </>
  )
}

export default App
