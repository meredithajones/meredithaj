import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    
    //Setting up semi-transparent navbar
    background: rgba(106, 179, 188, 0.7);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    `;

    export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `;

    //Setting up "LinkR" to work with react-router
    export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
    `;

    export const MobileIcon = styled.div`
        display: none;
        
        @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
            color: #fff;

        }
    `

    export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -20px;

        // setting it not to display at above 768px size
        @media screen and (max-width: 768px) {
            display: none;
        }
    `
    export const NavItem = styled.li`
        height: 80px;
    
    `
   export const NavLinks = styled(LinkS)`
        color: #00008B;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;

        &.active {
            border-bottom: 3px solid #01bf71;
        }

        &:hover{

        color:#fff; 
        border-bottom: 8px solid #fff;
        }

   `;
export const NavBtn = styled.nav`
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px){
            display: none;
        }
`
export const NavBtnLink = styled(LinkR)`
        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
`
    export const Img = styled.img`
        max-height: 100px;
        margin-left: -100px;
        
    `
