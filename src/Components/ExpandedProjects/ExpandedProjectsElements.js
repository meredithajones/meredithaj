import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaChevronCircleUp} from 'react-icons/fa';

export const ProjectsContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 90%;
    height: 90%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.9s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
   
`
export const CloseIcon = styled(FaChevronCircleUp)`
    color: #fff;
    size: 110%;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: 5F9EA0;
    font-size: 4rem;
    cursor: pointer;
    outline: none;

`;

export const ProjectsWrapper = styled.div`
    color: #fff;
    `

export const ProjectsMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

   
    `;

export const ProjectsLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out 
    }
    `



    export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `