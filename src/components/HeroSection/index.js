import React from 'react'
import picImg from '../../images/pic.JPG'
import { HeroContainer,
HeroLeftColumn,
HeroRightColumn,
ImgWrapper,
Img,
TextWrapper,
TextRow1,
TextRow2

} from './HeroSectionElements'

const HeroSection = () => {
  return (
    <>
    <HeroContainer id='home'>
          <HeroLeftColumn>
              <TextWrapper>
                <TextRow1>
                  <h1>Hi</h1>
                </TextRow1>
                <TextRow2>
                  <h1>world I love you</h1>
                </TextRow2>
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