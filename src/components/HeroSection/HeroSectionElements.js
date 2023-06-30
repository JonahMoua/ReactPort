import styled from 'styled-components'

export const HeroContainer = styled.div`
display: flex;
height: 1050px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
align-items: center;

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
flex-direction: column;
align-items: center;
justify-content: flex-start;
min-height: 200px;
border-radius: 20px;
position: relative;
`

export const TextWrapperFooter = styled.div`
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
justify-content: space-evenly;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: blue;
font-size: 24px;
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
export const Header = styled.div`
display: flex;
justify-content: flex-start;
padding: 20px;
`
export const Heading = styled.h1`
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: black;

}
`

