import React from "react";
import { BsList } from "react-icons/bs";
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
import Dropdown from "./Dropdown";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "5px",
            }}
          >
            <div>
              <img src={ColouredLogo} alt="logo" width="40px" height="40px" />
            </div>
            <NavLogo to="#"> Dinefyne</NavLogo>
          </div>

          <MobileIcon onClick={toggle}>
            <BsList style={{ fontWeight: "900" }} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <Dropdown isWhite={true} />
            </NavItem>
            <NavItem>
              <NavLinks to="services">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="form">REQUEST A DEMO</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
