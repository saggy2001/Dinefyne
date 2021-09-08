import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: var(--white-color);
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--margin);
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 555px;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const HeroH1 = styled.h1`
  color: var(--secondary-color);
  font-size: 45px;
  max-width: 500px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 45px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: var(--secondary-color);
  font-size: 20px;
  opacity: 0.7;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 555px;
  height: 100%;
  padding: 50px 0px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
