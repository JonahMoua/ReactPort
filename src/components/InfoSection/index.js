import React from 'react'
import {FaGithub} from 'react-icons/fa'
import img from '../../images/pic.JPG'
import { InfoSectionContainer,
InfoRow,
Column1,
Column2,
Img,
ImgWrap,
TextWrap,
TextHeader,
TextFooter,
SocialMediaWrap,
SocialIcons,
SocialIconLink,
Heading} from './InfoSectionElements'

const InfoSection = () => {
  return (
    <>
    <InfoSectionContainer>
          <InfoRow>

            <Column1>
              <TextWrap>
                <TextHeader> 
                  <Heading>Description</Heading>
                   </TextHeader>

                   <TextFooter>
                   <SocialMediaWrap>
                      <SocialIcons>

                          <SocialIconLink href='//www.github.com/JonahMoua' target='_blank' aria-label='Github'>
                              <FaGithub />

                          </SocialIconLink>

                      </SocialIcons>
                    </SocialMediaWrap>
                   </TextFooter>
              </TextWrap>


            </Column1>

            <Column2>
              <ImgWrap>
                    <Img src={img}/>
              </ImgWrap>
            </Column2>

          </InfoRow>
    </InfoSectionContainer>
    </>
  )
}

export default InfoSection