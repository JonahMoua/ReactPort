import React, {useState} from 'react';
import picImg from '../../images/pic.JPG'
import { HeroContainer,
HeroLeftColumn,
HeroRightColumn,
ImgWrapper,
Img,
TextWrapper,
Text,
TextWrapperFooter


} from './HeroSectionElements'

const HeroSection = () => {
  

  return (
    <>
    <HeroContainer id='home'>
          <HeroLeftColumn>
              <TextWrapper>
              <h1>hello</h1>
              <TextWrapperFooter>  </TextWrapperFooter>
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