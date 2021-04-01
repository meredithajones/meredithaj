import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'


const Home = () => {
    const [isOpen, setIsOpen] =useState (false)
    return (
        <>
            
        <Sidebar />
        <Navbar />
        </>
    )
}

export default Home
