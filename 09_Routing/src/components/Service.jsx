
//navigate() is used when you want to change routes based on some logic or action(functionality)
//(login, form submit, API success, etc.) rather than a direct link click. navigate("/home");

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate("/")
  }

  return (
    <>
      <h1>Service</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name' />
        <br />
        <input type="text" placeholder='enter email' />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Service
