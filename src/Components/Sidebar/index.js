import React from "react";
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, 
  SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
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

export default Sidebar;
