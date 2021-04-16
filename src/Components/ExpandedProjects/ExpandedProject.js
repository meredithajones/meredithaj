import React from "react";

const ExpandedProject = ({isOpen, toggle}) => {
  return (
    <ProjectsContainer isOpen={isOpen} onClick={toggle}>
      <ExpandIcon onClick={toggle}>
        <CloseIcon />
      </ExpandIcon>
      <ProjectsWrapper>
        <ProjectsMenu>
        <ProjectsLink> </ProjectsLink>
        </ProjectsMenu>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ExpandedProject;
