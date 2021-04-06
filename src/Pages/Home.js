import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection/Hero'
import InfoSection from '../Components/InfoSection'
import { homeObjOne } from '../Components/InfoSection/Data'


const Home = () => {
    const [isOpen, setIsOpen] =useState (false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>     
        <Sidebar isOpen={isOpen} toggle= {toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        </>
    );
};

export default Home
