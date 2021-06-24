import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
//import { Button } from "../Button";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavBtn2, NavBtnLink2, NavBtnLink55 } from "../navbar/NavBarElement";
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
import { connect } from "react-redux";



const Hero = ({ auth
}) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isLogin') === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth.isLogin])
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const { t } = useTranslation();
  return (
    <InfoContainer id="home" lightBg={false}>
      <InfoWrapper>
        <InfoRow imgStart="false">
          <Column1>
            <TextWrapper>
              <TopLine>Treat-min</TopLine>
              <Heading lightText="true">{t('care')}</Heading>
              <Subtitle >{t('describe')}</Subtitle>
              <div
                style={{ position: "relative", right: "50px", bottom: "40px" }}
              >
                {isLogin ?
                  <NavBtn2>
                    <NavBtnLink55 to="/MyAccount">{t('account')}</NavBtnLink55>
                  </NavBtn2>
                  :
                  <NavBtn2>
                    <NavBtnLink2 to="/signUp">{t('start')}</NavBtnLink2>
                  </NavBtn2>
                }
              </div>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={require("./m.png").default} alt="Hero" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Hero);