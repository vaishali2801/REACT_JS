import React, { Suspense ,lazy} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./Routes/MainLayout";
import Error from "./components/Error";
import Loading from "./components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(()=>import("./components/Home"));
const Service = lazy(()=>import("./components/Service"));
const Product = lazy(()=>import("./components/Product"));
const About = lazy(()=>import("./components/About"));

const App = () => {

  const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    errorElement: <Error />,

    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"Service",
        element:<Service/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Product/:id",
        element:<Product/>
      }
    ]

  }])

  return (
    <Suspense fallback={ <Loading/>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
