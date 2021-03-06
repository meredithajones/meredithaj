import React from 'react'
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksWrapper,
FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, CreatedWith,
SocialIconLink, SocialIcons, SocialLogo, SocialSection, SocialWrap, WebsiteRights }
from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>This is the title for the Footer</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">Linkedin</FooterLink>
                                <FooterLink to="/">Github</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>This is the title for the Footer</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">Linkedin</FooterLink>
                                <FooterLink to="/">Github</FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialSection>
                    <SocialWrap>
                        <SocialLogo to= "home">
                            Meredith Jones
                        </SocialLogo>
                        <WebsiteRights>
                            {/* setting up the copyright year to automatically update */}
                            Copyright © {new Date().getFullYear()}
                        </WebsiteRights>
                        <CreatedWith>Website Created with React <FaReact/></CreatedWith>
                        <SocialIcons>
                            <SocialIconLink href= "//www.linkedin.com/in/meredithjones4747/" target= "_blank"
                            aria-label ="Linkedin">
                            <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href= "//www.github.com/meredithajones" target= "_blank"
                            aria-label ="Github">
                            <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrap>
                </SocialSection>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
