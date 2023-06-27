import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from "./NavbarElements"


export const Navbar = () => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
    setScrollNav(true) 
    } else { 
        setScrollNav(false)
    }
}

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
    <Nav scrollNav={scrollNav}>

      <NavContainer>

        <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>Jonah Moua</NavLogo>

        <NavMenu>

          <NavItem>

            <NavLinks scrollNav={scrollNav}>Projects</NavLinks>

          </NavItem>

          <NavItem>

            <NavLinks scrollNav={scrollNav}>Showcase</NavLinks>

          </NavItem>

        </NavMenu>

      </NavContainer>

    </Nav>
    </>
  )
}

export default Navbar;