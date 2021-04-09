import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksWrapper,
FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink }
from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
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
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialSection>
                    <SocialWrap>
                        <SocialLogo to= '/'>
                            Logo
                        </SocialLogo>
                        <WebsiteRights>
                            {/* setting up the copyright year to automatically update */}
                            Copyright © {new Date().getFullYear()}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink>
                                
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrap>
                </SocialSection>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
