import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
import { BsChevronDown, BsList } from "react-icons/bs";
// import { BiMenuAltRight } from "react-icons/bi";

import { DropDownContainer } from "./NavbarElements";
import { DropDownHeader } from "./NavbarElements";
import { DropDownListContainer } from "./NavbarElements";
import { DropDownList } from "./NavbarElements";
import { ListItem } from "./NavbarElements";
import ColouredLogo from "../../images/ColouredLogo.svg";

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img src={ColouredLogo} alt="logo" width="40px" height="40px" />
            </div>
            <NavLogo to="/"> Dinefyne</NavLogo>
          </div>

          <MobileIcon onClick={toggle}>
            <BsList style={{ fontWeight: "900" }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <DropDownContainer>
              <DropDownHeader onClick={toggling}>
                Use Cases
                <BsChevronDown />
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    <ListItem>Hotel</ListItem>
                    <ListItem>Cafe & Bakery</ListItem>
                    <ListItem>Coffee Shop</ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
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
