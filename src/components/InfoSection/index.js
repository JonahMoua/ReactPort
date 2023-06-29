import React from 'react'
import img from '../../images/pic.JPG'
import { InfoSectionContainer,
InfoRow,
Column1,
Column2,
Img,
ImgWrap,
TextWrap } from './InfoSectionElements'

const InfoSection = () => {
  return (
    <>
    <InfoSectionContainer>
          <InfoRow>

            <Column1>
              <TextWrap>
                hi
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