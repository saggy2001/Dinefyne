import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";
import { BsChevronDown } from "react-icons/bs";

import { DropDownContainer } from "../Navbar/NavbarElements";
import { DropDownHeader } from "../Navbar/NavbarElements";
import { DropDownListContainer } from "../Navbar/NavbarElements";
import { DropDownList } from "../Navbar/NavbarElements";
import { ListItem } from "../Navbar/NavbarElements";
const Sidebar = ({ isOpen, toggle }) => {
  const [isActive, setIsActive] = React.useState(false);
  const toggling = () => setIsActive(!isActive);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          {/* <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink> */}
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              Use Cases
              <BsChevronDown />
            </DropDownHeader>
            {isActive && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>Hotel</ListItem>
                  <ListItem>Cafe & Bakery</ListItem>
                  <ListItem>Coffee Shop</ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>

          <SidebarLink to="services" onClick={toggle}>
            Features
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="form" onClick={toggle}>
            REQUEST A DEMO
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
