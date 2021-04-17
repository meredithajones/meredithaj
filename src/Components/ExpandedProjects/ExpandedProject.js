import React from "react";
import { ProjectsContainer, Icon, CloseIcon, ProjectsWrapper,
ProjectsMenu, ProjectsLink } from '../ExpandedProjects/ExpandedProjectsElements';

const ExpandedProject = ({isOpen, toggle}) => {
  return (
    <ProjectsContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <ProjectsWrapper>
        <ProjectsMenu>
        <ProjectsLink> </ProjectsLink>
        </ProjectsMenu>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ExpandedProject;
