import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";
import { Button } from "../Button";
const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <img
          src={require("./Hero.svg").default}
          alt="Hero"
          //height="2151"
          width="100%"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1> Care Close to home...</HeroH1>
        <HeroP>
          we care about your health sign up now to book the best specalist in
          town and save your life in 1 minute{" "}
        </HeroP>

        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            fontBig="false"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default Hero;
