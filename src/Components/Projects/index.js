import React from 'react'
import Icon1 from '../../Images/FFA.png';
import Icon2 from '../../Images/HT.png';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom";
import { AnimateSharedLayout, motion, useCycle } from 'framer-motion';
import {ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, 
ProjectsCard, ProjectsIcon, ProjectsP}
from './ProjectsElements';
import FFA from '../../Pages/FridgeForAll/FridgeForAll';
import { Icon, CloseIcon } from '../Sidebar/SidebarElements';

const Projects = ({isOpen, toggle}) => {
    return (
        <ProjectsContainer id="projects" isOpen={isOpen} onClick={toggle}>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Fridge For All</ProjectsH2>
                    <ProjectsP>An inventory tracker for Philly Community Fridges</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Happy Trails</ProjectsH2>
                    <ProjectsP>An Application to match hikers with trails</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Shop & Chef</ProjectsH2>
                    <ProjectsP>These are projects that I love</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
