import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
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
              <FooterLink to="/signin">Features</FooterLink>
              <FooterLink to="/signin">Tablet Menu</FooterLink>
              <FooterLink to="/signin">Dine-in QR Menu</FooterLink>
              <FooterLink to="/signin">Delivery & Pick-Up Menu</FooterLink>
              {/* <FooterLink to="/signin">Investors</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Business Types</FooterLinkTitle>
              <FooterLink to="/signin">Cafes & Bakery</FooterLink>
              <FooterLink to="/signin">Coffee Shop</FooterLink>
              {/* <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">dinefyne</SocialLogo>
            <WebsiteRights>
              dinefyne © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
