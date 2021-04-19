import React from 'react'
import Icon1 from '../../Images/FFA.png';
import Icon2 from '../../Images/HT.png';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom";
import { AnimateSharedLayout, motion, useCycle } from 'framer-motion';
import {ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, 
ProjectsCard, ProjectsIcon, ProjectsP}
from './ProjectsElements';
import { CloseIcon } from '../Sidebar/SidebarElements';
import { FaChevronDown } from 'react-icons/fa';
import Accordian from '../Accordian/Accordian.js';

const Projects = ({ isOpen, toggle }) => {

    const openFridgeForAllModal = () => {
        console.log( "Modal is open")
    };

    return (
        <ProjectsContainer >
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard >
                    <h2>Modal Header</h2>
                    <p>Project Description</p>
                <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Fridge For All</ProjectsH2>
                    <ProjectsP>An inventory tracker for Philly Community Fridges</ProjectsP>
                    <FaChevronDown onClick={toggle}>
                    <Accordian />
                    <CloseIcon />
                </FaChevronDown>
                </ProjectsCard>
                <ProjectsCard id="projects" isOpen={isOpen} onClick={toggle}>
                <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Happy Trails</ProjectsH2>
                    <ProjectsP>An Application to match hikers with trails</ProjectsP>
                    <FaChevronDown onClick={toggle}>
                    <CloseIcon />
                </FaChevronDown>
                </ProjectsCard>
                <ProjectsCard id="projects" isOpen={isOpen} onClick={toggle}>
                <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Shop & Chef</ProjectsH2>
                    <ProjectsP>These are projects that I love</ProjectsP>
                    <FaChevronDown onClick={toggle}>
                    <CloseIcon />
                </FaChevronDown>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
