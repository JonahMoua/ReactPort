import styled from 'styled-components'

export const HeroContainer = styled.div`
background: lightblue;
display: flex;
// justify-content: center;
// align-items: center;
padding: 0 0px;
height: 1050px;
position: relative;
z-index: 1;


}
`

export const HeroLeftColumn = styled.div`
flex: 1;
display: grid;
align-items: center;
justify-content: center;
`

export const HeroRightColumn = styled.div`
flex: 1;
display: flex;
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
border-radius: 20px;
`

export const TextRow1 = styled.div`
background: white;
border-radius: 20px;
height: 50%;
width: 500px;
display: flex;
justify-content: center;
align-items: center;
`

export const TextRow2 = styled.div`
background: lightgreen;
border-radius: 20px;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
`
export const Text = styled.h1`

`
