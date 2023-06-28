import styled from 'styled-components'

export const HeroContainer = styled.div`
background: lightblue;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1050px;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2

}
`

export const HeroLeftColumn = styled.div`
flex: 1;
justify-content: center;
align-items: center;
`

export const HeroRightColumn = styled.div`
flex: 1;
justify-content: center;
align-items: center;
`

export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
`
export const Img = styled.img`
width: 550px;
height: 800px;
margin: 0 0 10px 0;
padding-right: 0; 
border-radius: 20px;
`

export const TextWrapper = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;

`

export const TextRow1 = styled.div`
align-items: flex-start;
`

export const TextRow2 = styled.div`
display: flex;
`
