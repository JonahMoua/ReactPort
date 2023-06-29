import React, {useState} from 'react';
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


  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const toggleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  
  const toggleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  
  

  return (
    <>
    <HeroContainer id='home'>
          <HeroLeftColumn>

                <TextRow1 isFlipped={isFlipped1} onClick={toggleFlip1}>
                      <Text>
                        Hello
                      </Text>
                </TextRow1>
                <TextRow2 isFlipped={isFlipped2} onClick={toggleFlip2}>
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