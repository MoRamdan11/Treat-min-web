import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { useTranslation, initReactI18next } from "react-i18next";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Globals from "../global"


import {
  GridContainer,
  GridLogo,
  GridCompany,
  FooterLink,
  EmergencyLink,
  GridServices,
  GridUsefulLinks,
  GridContactUs,
  H3
} from "./FooterElements";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { connect } from "react-redux";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});
const useStyles = makeStyles({
  lgogImg: {
    width: "200px",
    height: "40px",
    margin: "0 auto 30px auto",
    display: "block"
  },
  iconStyle: {
    weight: "40px",
    height: "40px",
    margin: "0 30px 0 30px"
    //margin : "0 auto 0 auto"
  },
  mailStyle: {
    color: "#00917c"
  },
  phoneNumber: {
    display: "inline",
  },
  socialIcon: {
    weight: "30px",
    height: "30px",
    marginRight: "20px",
    marginTop: "10px",
    cursor: "pointer"
  },
  rights: {
    textAlign: "center",
    width: "100%",
    display: "block",
    fontWeight: "bold",
    color: "#00917c",
    marginTop: "20px"
  }
});
function Footer(props) {
  const { t } = useTranslation();
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  const styles = useStyles();
  return (

    <MessengerCustomerChat
      pageId="105983478314658"
      appId="423865358655348"
    />,
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>

        <GridContainer container>
          <GridLogo xs={12} sm={12} md={3} lg={3}>
            <img className={styles.lgogImg} src={require("./icons/treat.png").default} />
            <h3 >Comming Soon in playStore</h3>
          </GridLogo>
          <GridCompany xs={6} sm={6} md={2} lg={2}>
            <H3>{t('company')}</H3>
            <FooterLink to="/">{t('aboutus')}</FooterLink>
            <FooterLink to="/team">{t('team')}</FooterLink>
          </GridCompany>
          <GridServices xs={6} sm={6} md={2} lg={2}>
            <H3>{t('service')}</H3>
            <FooterLink to="FindClinical">{t('clinic')}</FooterLink>
            <FooterLink to="FindServices">{t('service')}</FooterLink>
          </GridServices>
          <GridUsefulLinks xs={12} sm={12} md={2} lg={2}>
            <H3>{t('usefullink')}</H3>
            <FooterLink to="/">{t('home')}</FooterLink>
            {props.auth.isLogin && <FooterLink to="/MyAccount">{t('account')}</FooterLink>}
            {/*<FooterLink to="#">{t('help')}</FooterLink>*/}
          </GridUsefulLinks>
          <GridContactUs xs={12} sm={12} md={3} lg={2}>
            <H3>{t('contactus')}</H3>
            <IconButton size="small" className={styles.mailStyle} href="#">
              <MailIcon />
            </IconButton>
            <p className={styles.phoneNumber}>info.treatmin@gmail.com</p>
            <br />
            <div style={{display: "flex", justifyContent: "center", padding: "5px 20%"}}>
              <a target="_blank" href="https://www.facebook.com/Treat-min-105983478314658">
                <img
                  className={styles.socialIcon}
                  style={{ marginLeft: "20px" }}
                  src={require("./icons/facebook.png").default}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/treatmin/">
                <img
                  className={styles.socialIcon}
                  src={require("./icons/instagram.png").default}
                />
              </a>
              {/*<NavLink to="#">
              <img
                className={styles.socialIcon}
                src={require("./icons/Twitter.png").default}
              />
              </NavLink>*/}
              {/*<NavLink to="#">
              <img
                className={styles.socialIcon}
                src={require("./icons/linkedin.png").default}
              />
            </NavLink>*/}
            </div>
          </GridContactUs>
          <div className={styles.rights}>
            <h3>{t('right')} &copy; Treat-min {currentYear}</h3>
          </div>
        </GridContainer>
      </StylesProvider>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Footer);
