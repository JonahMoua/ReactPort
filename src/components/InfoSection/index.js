import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { InfoSectionContainer, InfoRow, Column1, Column2, ImgWrap, TextWrap, TextHeader, TextFooter, SocialMediaWrap, SocialIcons, SocialIconLink, Heading, Description } from './InfoSectionElements';
import Slideshow from './Slideshow';

const InfoSection = ({ imgStart, title, link, img, id, lightBg, lightText, lightTextDesc }) => {


  return (
    <>
      <InfoSectionContainer lightBg = {lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrap >
                <Heading lightText = {lightText}>{title}</Heading> 
                <Description lightTextDesc = {lightTextDesc}>hif</Description>
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
