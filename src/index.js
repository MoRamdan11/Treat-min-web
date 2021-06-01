import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icon.min.css';
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import configureStore from "./Redux/store/configureStore";
import i18next from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
const store = configureStore();
const rootElement = document.getElementById("root");
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'ar',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/localization/{{lng}}/translation.json',
    },
  })
const loadingMarkup = (
  <div className="py-4 text-center">
  <h1 style={{color:"white"}}> Loading...</h1>
    <img  style={{width:"360px"}} src={require("../src/images/Loading-pana.png").default} alt="loading..."/>
  </div>
)
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  </Suspense>,
  rootElement
);
