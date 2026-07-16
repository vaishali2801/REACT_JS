import React from 'react'
// import Dummy from './utils/Dummy'
import Student from "./components/Student";
import MainLayout from "./routes/MainLayout";
import "./App.css";

import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

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
      
    ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
