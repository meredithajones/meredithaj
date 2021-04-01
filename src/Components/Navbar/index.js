import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>
                      That Link
                  </NavLogo>
                  <h1> Hellloo </h1>
                  <MobileIcon onClick= {toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="discover">Discover</NavLinks>
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
