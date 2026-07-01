import React, { useState } from 'react'
import AddToDo from './components/Addtodo';
import "./App.css";

const App = () => {
  const [todo,setToDo] = useState([]);

  const handleAdd = (newToDo) =>{
    console.log("Received:", newToDo); 
    setToDo((prev)=>[...prev,newToDo])
  }
  
  return (
    <div className='container'>
    <h1>ToDo App</h1>
      <AddToDo handleAdd={handleAdd}/>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.task}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
