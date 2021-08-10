import React, { useState } from "react";
import { Button } from "../ButtonElement";
// import background from "../../images/background.svg";
import hero_img from "../../images/hero_img.svg";

import {
  HeroContainer,
  // HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImgWrap,
  Img,
} from "./HeroElements";
// import video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg src={background} alt="..." />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>Free Digital Menu & Restaurant Ordering System</HeroH1>
        <HeroP>
          Dinefyne helps you maximize your restaurant's ordering revenue by
          AI-driven dine-in, pickup, and delivery solutions.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            big="true"
            fontbig="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <ImgWrap>
        <Img src={hero_img} alt="hiii" />
      </ImgWrap>
    </HeroContainer>
  );
};

export default HeroSection;
