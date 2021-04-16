import React from "react";

const ExpandedProject = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to="home" onClick={toggle}>
                    Home</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
              About
          </SidebarLink>
            <SidebarLink to="projects" onClick={toggle}>
                Projects</SidebarLink>
                <SidebarLink to="writing" onClick={toggle}>
                Published Articles</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default ExpandedProject;
