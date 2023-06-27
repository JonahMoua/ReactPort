import React from 'react'
import {
  Nav,
  NavContainer,
  NavMenu,
  NavItem,
  NavLogo
} from "./NavbarElements"

export const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>About Me</NavLogo>
        <NavMenu>
          <NavItem>
            Projects
          </NavItem>
          <NavItem>
            ShowCase
          </NavItem>

        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar