import React from 'react'

const Listtodo = ({todo,handleDelete,handleEdit,handleToggleTodo}) => {
  return (
    <>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>id</th>
            <th>Status</th>
            <th>Task</th>
            <th>Description</th>
            <th colSpan={2}>actions</th>
          </tr>
        </thead>

        <tbody>
          {todo.map((t, index) => {
            return(
              <tr key={t.id}>
              <td>{index + 1}</td>
              <td><input type="checkbox" checked={t.completed} onChange={() => handleToggleTodo(t.id)}/></td>
              <td>{t.task}</td>
              <td>{t.description}</td>
              <td><button onClick={()=>handleEdit(t.id)} className='btn1'>Edit</button></td>
              <td><button onClick={()=>handleDelete(t.id)} className='btn2'>Delete</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Listtodo
