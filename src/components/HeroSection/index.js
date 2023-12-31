import React, {useState} from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import picImg from '../../images/pic.JPG'
import { HeroContainer,
HeroLeftColumn,
HeroRightColumn,
ImgWrapper,
Img,
TextWrapper,
TextWrapperFooter,
SocialMediaWrap,
SocialIcons,
SocialIconLink,
Heading,
Header


} from './HeroSectionElements'

const HeroSection = () => {
  

  return (
    <>
    <HeroContainer id='home'>
          <HeroLeftColumn>
              <TextWrapper>
                <Header>
                  <Heading> About Me </Heading>
                    </Header>
                    home
                  <TextWrapperFooter>  
                    <SocialMediaWrap>
                      <SocialIcons>
                        <SocialIconLink href='//www.linkedin.com/in/jonahmoua1' target='_blank' aria-label='Linkedin'>
                              <FaLinkedin />
                          </SocialIconLink>

                          <SocialIconLink href='//www.github.com/JonahMoua' target='_blank' aria-label='Github'>
                              <FaGithub />
                          </SocialIconLink>

                      </SocialIcons>
                    </SocialMediaWrap>
                  </TextWrapperFooter>
              </TextWrapper>
            </HeroLeftColumn>


            <HeroRightColumn>
              
              <ImgWrapper>
                <Img src={picImg} />
              </ImgWrapper>
              
            </HeroRightColumn>

            
    </HeroContainer>
    </>
  )
}

export default HeroSection