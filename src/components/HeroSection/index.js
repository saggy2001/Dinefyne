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
    <HeroContainer id="home">
      {/* <HeroBg>
        <VideoBg src={background} alt="..." />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>
          Create Free Digital Menu and Restaurant Ordering System in 10 seconds
        </HeroH1>
        <HeroP>
          Empower your Business and Increase your sales with Digital Technology.
          Time to say Good Bye to 3rd Party Aggregator Platform
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
