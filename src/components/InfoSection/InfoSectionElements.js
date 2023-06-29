import styled from 'styled-components'

export const InfoSectionContainer = styled.div`
display: flex;
z-index: 1;
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
height: 50%;
border-radius: 20px;
position: relative;
`

