import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { InfoSectionContainer, InfoRow, Column1, Column2, ImgWrap, TextWrap, TextHeader, TextFooter, SocialMediaWrap, SocialIcons, SocialIconLink, Heading } from './InfoSectionElements';
import Slideshow from './Slideshow';

const InfoSection = ({ imgStart, title, link, img, id }) => {


  return (
    <>
      <InfoSectionContainer id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrap>
              <TextHeader>
                <Heading>{title}</Heading>
              </TextHeader>
              hi
              <TextFooter>
                <SocialMediaWrap>
                  <SocialIcons>
                    <SocialIconLink href={link} target='_blank' aria-label='Github'>
                      <FaGithub />
                    </SocialIconLink>
                  </SocialIcons>
                </SocialMediaWrap>
              </TextFooter>
            </TextWrap>
          </Column1>
          <Column2>
            <ImgWrap>
              <Slideshow images={img} width/> 
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
