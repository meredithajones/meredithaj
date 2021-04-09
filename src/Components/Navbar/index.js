import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../Images/Initials.png'
import {Nav, NavbarContainer,  
    MobileIcon, NavMenu, NavLogo, NavItem, NavLinks, Img } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useSate(false)
    
    const changeNav =() => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>
                  <Img src={Logo} alt="" />
                  </NavLogo>
                  <h1> </h1>
                  <MobileIcon onClick= {toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects">Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services">Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="contact">Contact</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
            
        </>
    );
};

export default Navbar
