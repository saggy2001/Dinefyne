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
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: var(--primary-color);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  /* font-weight: bold; */
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
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
`;

export const NavLinks = styled(LinkS)`
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  text-decoration: none;
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

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: var(--primary-color);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--white-color);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
    /* opacity: 0.8; */
    /* color: #010606; */
    opacity: 0.6;
  }
`;

export const DropDownContainer = styled("div")`
  /* width: 10.5em; */
  width: 6rem;
  /* padding: 0 1rem; */
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;

  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */

  /* flex-direction: column;
  justify-content: space-between; */
  @media screen and (max-width: 768px) {
    width: 9rem;
  }
`;

export const DropDownHeader = styled("div")`
  /* margin-top: 0;
  margin-bottom: 8em; */
  /* position: relative; */
  /* padding: 0.4em 2em 0.4em 1em; */
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #3faffa; */
  /* background: #ffffff; */
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  position: absolute;
  top: 50px;
  /* padding: 2rem; */
  width: 200px;
  height: 180px;
  margin: 0;
  /* padding-left: 1em; */
  background: #ffffff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

  /* border: 2px solid #e5e5e5; */
  /* box-sizing: border-box; */
  /* color: #3faffa; */
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  margin-bottom: 0.8em;
  color: black;
  &:hover {
    color: var(--primary-color);
  }
`;
