import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: var(--white-color);
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    tansition: 0.8s all ease;
  }

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;
export const NavLogo = styled(LinkR)`
  color: var(--primary-color);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-weight: 600;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--primary-color);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 480px) {
    height: 60px;
  }
`;

export const NavLinks = styled(LinkS)`
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: var(--primary-color);
  white-space: nowrap;
  font-weight: bold;
  padding: 10px 22px;
  color: var(--white-color);
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
  }
`;
