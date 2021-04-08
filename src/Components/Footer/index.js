import React from 'react'

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
                        <FooterLinkTitle>This is the title for the Footer</FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">Linkedin</FooterLink>
                                <FooterLink to="/">Github</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
