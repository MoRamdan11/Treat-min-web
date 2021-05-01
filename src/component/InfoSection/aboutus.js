import React, { useState } from "react";
//import { Button } from "../Button";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useTranslation, initReactI18next } from "react-i18next";
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

const Aboutus = ({
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const { t } = useTranslation();
  return (
    <InfoContainer id="about" lightBg={false}>
      <InfoWrapper>
        <InfoRow imgStart="false">
          <Column1>
            <TextWrapper>
              <TopLine>{t('aboutus')}</TopLine>
              <Heading lightText="true">{t('what')}</Heading>
              <Subtitle >{t('aboutdes')}</Subtitle>
              <div
                style={{ position: "relative", right: "50px", bottom: "40px" }}
              >
                <NavBtn2>
                  <NavBtnLink2 to="/team">{t('know_more')}</NavBtnLink2>
                </NavBtn2>
              </div>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={require("./about.png").default} alt="about us" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
export default Aboutus;
