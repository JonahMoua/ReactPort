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
display: flex;
align-items: center;
justify-content: center;
`

export const TextWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: white;
width: 50%;
height: 50%;
border-radius: 20px;
position: relative;
// padding-bottom: 50px;
`

export const TextWrapperFooter = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100px; 
background-color: black; 
border-radius: 20px;
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
width: 50%;
height: auto;

`
export const Img = styled.img`
border-radius: 50%;
object-fit: cover;
width: 600px;
height: 600px;

&:hover {
    transform: scale(1.1);
}
`

export const Text = styled.h1`

`
