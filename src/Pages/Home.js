import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection/Hero'
import InfoSection from '../Components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data'
import Projects from '../Components/Projects'
// import ContactForm from '../Components/ContactForm'
import SideButton from '../Components/SideButton'
import Footer from '../Components/Footer'
import { SideButtonWrapper } from '../Components/SideButton/SideButtonElements'


const Home = () => {
    const [isOpen, setIsOpen] =useState (false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>   
        <SideButtonWrapper>
        <SideButton />
        </SideButtonWrapper>  
        <Sidebar isOpen={isOpen} toggle= {toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Projects />
        <InfoSection {...homeObjThree}/>
        {/* <ContactForm /> */}
        <Footer />
        </>
    );
};

export default Home
