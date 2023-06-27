import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from "./NavbarElements"

export const Navbar = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
    <Nav>

      <NavContainer>

        <NavLogo to='/' onClick={toggleHome}>About Me</NavLogo>

        <NavMenu>

          <NavItem>

            <NavLinks>Projects</NavLinks>

          </NavItem>

          <NavItem>

            <NavLinks>Showcase</NavLinks>

          </NavItem>

        </NavMenu>

      </NavContainer>

    </Nav>
    </>
  )
}

export default Navbar;