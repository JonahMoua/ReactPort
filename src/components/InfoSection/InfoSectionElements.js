import styled from 'styled-components'

export const InfoSectionContainer = styled.div`
display: flex;
height: 1050px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
align-items: center;
`


export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
align-items: center;
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
align-items: center;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const ImgWrap = styled.div`
display: flex;
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0; 
`

export const TextWrap = styled.div`
display: flex;
background: black;
border-radius: 20px;
height: 200px;
position: relative;

`

export const TextHeader = styled.div`
display: flex;
color: red;
justify-content: center;
padding: 20px;
position: absolute;
top: 0;
left: 0;
width: 100%;
z-index: 2;
`

export const TextFooter = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100px; 
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: blue;
font-size: 24px;

`

export const Heading = styled.h1`
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: white;
`
