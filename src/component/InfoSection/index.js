import React, { useState } from "react";
//import { Button } from "../Button";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavBtn2, NavBtnLink2 } from "../navbar/NavBarElement";
import {
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ArrowForward,
  ArrowRight,
  ImgWrap,
  Img
} from "./InfoSectionElements";

const InfoSection = ({
  description,
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
  buttonLabel,
  buttonlink
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <div
                style={{ position: "relative", right: "50px", bottom: "40px" }}
              >
                <NavBtn2>
                  <NavBtnLink2 to={buttonlink}>{buttonLabel}</NavBtnLink2>
                </NavBtn2>
              </div>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
export default InfoSection;
