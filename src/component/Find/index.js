import React , { useState } from "react";
import { Button } from "../Button";
import {InfoWrapper,InfoContainer,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ArrowForward,ArrowRight,ImgWrap,Img}from "../InfoSection/InfoSectionElements";
import {FindForm} from "./findform";
import { useTranslation, initReactI18next } from "react-i18next";

const FindSection=()=>
{
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
   <InfoContainer id="book"  lightBg="false">
   <InfoWrapper>
    <InfoRow imgStart="false">
    <Column1>
    <FindForm/>
    <BtnWrap>
    <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            fontBig="false"
          >
          {t('find')} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
    </BtnWrap>
    </Column1>
    <Column2>
    <ImgWrap>
    <Img src={require("./book.png").default} alt='image'/>
    </ImgWrap>
    </Column2>
    </InfoRow>
   </InfoWrapper>
   </InfoContainer>
  )
}
export default FindSection;
