import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 80px;
// margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 2;

@media screen and (max-width: 960px) {

transition: 0.8s all ease;
}
`

export const NavLogo = styled(LinkR)`
color: ${({scrollNav}) => (scrollNav ? 'white' : 'black')};
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
z-index: 3;
`

export const NavContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: ${({scrollNav}) => (scrollNav ? '#FFFFFF' : 'black')};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
z-index: 3;

&:hover{
    color: #004fff;
    transition: 0.2s ease-in-out;
}

&.active {
    border-bottom: 3px solid #004fff;
}
`