import React from 'react'
import picImg from '../../images/pic.JPG'
import { HeroContainer,
HeroLeftColumn,
HeroRightColumn,
ImgWrapper,
Img,
TextRow1,
TextRow2,
Text


} from './HeroSectionElements'

const HeroSection = () => {
  return (
    <>
    <HeroContainer id='home'>
          <HeroLeftColumn>

                <TextRow1>
                      <Text>
                        Hello
                      </Text>
                </TextRow1>
                <TextRow2>
                      <Text>
                        World
                      </Text>
                </TextRow2>

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