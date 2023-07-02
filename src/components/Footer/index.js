import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
    return (
    <FooterContainer>
        <FooterWrap> 
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Get to Know Us! </FooterLinkTitle>
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Services</FooterLink>                       
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>Destinations</FooterLink>
                            <FooterLink to='/'>Sponsorships</FooterLink>                      
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Products </FooterLinkTitle>
                            <FooterLink to='/'>Credit Cards</FooterLink>
                            <FooterLink to='/'>Checking and Savings</FooterLink>
                            <FooterLink to='/'>Commercial</FooterLink>
                            <FooterLink to='/'>CreditWise</FooterLink>
                            <FooterLink to='/'>Software</FooterLink>                       
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Legal </FooterLinkTitle>
                            <FooterLink to='/'>Privacy</FooterLink>
                            <FooterLink to='/'>Patriot Act Certification</FooterLink>
                            <FooterLink to='/'>Wolfsberg Questionnaire</FooterLink>
                            <FooterLink to='/'>Subpoena Policy</FooterLink>
                            <FooterLink to='/'>Additional Disclosures</FooterLink>                       
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Jonah Moua
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='//github.com/JonahMoua' target='_blank' aria-label='Linkedin'>
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/in/jonahmoua1' target='_blank' aria-label='Github'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;