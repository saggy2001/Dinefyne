import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import white_logo from "../../images/white_logo.svg";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Product</FooterLinkTitle>
              <FooterLink to="services">Features</FooterLink>
              <FooterLink to="about">Tablet Menu</FooterLink>
              <FooterLink to="home">Dine-in QR Menu</FooterLink>
              <FooterLink to="about2">Delivery & Pick-Up Menu</FooterLink>
              {/* <FooterLink to="/signin">Investors</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Business Types</FooterLinkTitle>
              <FooterLink to="#">Restaurant</FooterLink>
              <FooterLink to="#">Hotel</FooterLink>
              <FooterLink to="#">Cafes & Bakery</FooterLink>
              <FooterLink to="#">Coffee Shop</FooterLink>
              {/* <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink
                to="#"
                onClick={(e) => {
                  window.location = "mailto:dinefyne@gmail.com";
                  e.preventDefault();
                }}
              >
                dinefyne@gmail.com
              </FooterLink>
              {/* <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink> */}
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="#">
              <img src={white_logo} alt="logo" width="40px" height="40px" />{" "}
              Dinefyne
            </SocialLogo>
            <WebsiteRights>
              Dinefyne ?? {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/Dinefyne-102751958806894"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/dinefyne/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCWOq0ojvVz524N57gL8fxlA"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
