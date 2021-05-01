import React , { useState } from "react";
import { NavBtn2,NavBtnLink2} from "../navbar/NavBarElement"
import {InfoWrapper,InfoContainer,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ArrowForward,ArrowRight,ImgWrap,Img}from "../InfoSection/InfoSectionElements";
import FindForm from "./findform"
import FindClincal from "../../pages/FindClical";
import { useTranslation, initReactI18next } from "react-i18next";
const FindClincalSection=()=>
{ const { t } = useTranslation();
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
    <NavBtn2>
            <NavBtnLink2 to="/FindClinical">{t('find')}</NavBtnLink2>
          </NavBtn2>
    
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
export default FindClincalSection;
