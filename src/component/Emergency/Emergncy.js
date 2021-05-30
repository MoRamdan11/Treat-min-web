import React from 'react'
import { Button } from 'react-scroll'
import "./Emergency.css";
import {NavBtnLink} from "../navbar/NavBarElement";
import { useTranslation } from "react-i18next";


const Emergncy = () => {
    const { t } = useTranslation();
    return (
        <div>
        <h1 className="header"> {t('helpyou')} </h1>
        <h2 className="subheader">{t('keepcalm')}</h2>
        <img src={require("./Nursing home.gif").default} alt="loading..."  className="image"/>
        <div className="btn__container">
       <NavBtnLink className="btn"> {t('firstaid')}</NavBtnLink></div>
       <div className="btn__container">
       <NavBtnLink to="/Emergency2" className="btn">{t('nearesthospital')}</NavBtnLink>
        </div>
        </div>
    )
}

export default Emergncy;
