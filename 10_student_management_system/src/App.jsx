import React from 'react'

import Student from "./components/Student";
import MainLayout from "./routes/MainLayout";

import "./App.css";

import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const App = () => {
  const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    errorElement: <h1>404 -Error</h1>,
    children:[
      {
        index:true,
        element:<Student/>
      },
      {
        path:"Add",
        element:<AddStudent/>
      },
      {
        path:"editStudent",
        element:<EditStudent/>
      }
    ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
