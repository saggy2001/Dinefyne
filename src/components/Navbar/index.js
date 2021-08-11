import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

import { DropDownContainer } from "./NavbarElements";
import { DropDownHeader } from "./NavbarElements";
import { DropDownListContainer } from "./NavbarElements";
import { DropDownList } from "./NavbarElements";
import { ListItem } from "./NavbarElements";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dinefyne</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            {/* <NavItem> */}
            {/* <NavLinks to="discover">Discover</NavLinks> */}
            <DropDownContainer>
              <DropDownHeader onClick={toggling}>
                Use Cases
                <BsChevronDown />
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    <ListItem>Mangoes</ListItem>
                    <ListItem>Apples</ListItem>
                    <ListItem>Oranges</ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
            {/* </NavItem> */}
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
