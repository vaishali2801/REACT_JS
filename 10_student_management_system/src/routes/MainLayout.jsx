import React from 'react'
import NavbarComponent from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <NavbarComponent/>
            <Outlet/>
        </>
    )
}

export default MainLayout
