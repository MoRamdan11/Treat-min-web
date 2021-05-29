import React from 'react';
import "./index.css";
import { useTranslation, initReactI18next } from "react-i18next";

const SearchNotFound = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1 className="title">  {t('searchnotfound')}</h1>
            <img  className="image" src={require("./Search engines.gif").default} alt="loading..."  className="image"/>
        </div>
    )
}

export default SearchNotFound 
