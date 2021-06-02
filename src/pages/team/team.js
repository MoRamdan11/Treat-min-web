import React, { useEffect, useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  GridContainer,
  GridSupervisor,
  AvaterImg,
  GridWeb,
  Link,
  GridBackEnd,
  GridMobile,
  GridElement,
  GridMobileElements,
  TeamImg,
  SupervisorsDiv
} from "./teamElements";
import Globals from "../../component/navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});

const useStyles = makeStyles({
  super: {
    borderRadius: "20px",
    backgroundColor: "#f4f9f9",
    width: "300px",
    margin: "0 auto 0 auto",
    marginTop: "20px",
    "@media screen and (max-width: 300px)": {
      width: "200px"
    }
  },
  super2: {
    borderRadius: "0 0 20px 20px",
    backgroundColor: "#f4f9f9",
    width: "300px",
    margin: "0 auto 0 auto",
    marginBottom: "20px",
    color: "#235274",
    "@media screen and (max-width: 300px)": {
      width: "200px"
    }
  },
  super3: {
    borderRadius: "0 0 20px 20px",
    backgroundColor: "#f4f9f9",
    width: "300px",
    margin: "0 auto 0 auto",
    marginBottom: "20px",
    "@media screen and (max-width: 300px)": {
      width: "200px"
    }
  },
  fontStyle: {
    marginBottom: "5px"
  },
  imgStyle: {
    width: "500px",
    height: "500px",
    borderRadius: "20px 20px 20px 20px"
  },
  gridImg: {
    backgroundColor: "#235274"
  },
  mobileAvater: {
    "@media screen and (min-width: 1100px)": {
      padding: "20px"
    }
  }
});
const Team = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <GridContainer container>
            <Grid className={styles.gridImg} xs={12} sm={12} md={12} lg={12}>
              <TeamImg src={require("../../images/Team work-bro.png").default} />
            </Grid>
            <GridSupervisor container>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <SupervisorsDiv>
                  <h1 className={styles.fontStyle}>{t('superviors')}</h1>
                  <p>{t('thankful')}</p>
                  <p style={{ marginBottom: "20px" }}>
                    {t('thankyou')}
                  </p>
                </SupervisorsDiv>
              </Grid>
              <GridElement xs={12} sm={12} md={6} lg={6}>
                <AvaterImg src={require("../../images/health.png").default} />
                <h2 className={styles.fontStyle}> {t('profahmed')}</h2>
                <p>
                  {t('prof')} {" "}
                  <Link target="_blank" href="https://eng.asu.edu.eg/">
                    {t('foeasu')}
                  </Link>{" "}
                  {t('dean')} {" "}
                  <Link target="_blank" href="https://www.nu.edu.eg/index.php">
                    {t('nile')}
                  </Link>
                </p>
              </GridElement>
              <GridElement xs={12} sm={12} md={6} lg={6}>
                <AvaterImg src={require("../../images/health.png").default} />
                <h2 className={styles.fontStyle}>{t('sara')}</h2>
                <p>
                  {t('ta')} {" "}
                  <Link target="_blank" href="https://eng.asu.edu.eg/">
                    {t('foeasu')}
                  </Link>
                </p>
              </GridElement>
            </GridSupervisor>
            <GridWeb container xs={12} sm={12} md={12} lg={12}>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <div className={styles.super3}>
                  <h1 className={styles.fontStyle} style={{ color: "#235274" }}>
                    {t('web')}
                  </h1>
                </div>
              </Grid>
              <GridElement xs={12} sm={12} md={4} lg={4}>
                <AvaterImg src={require("../../images/gerges.jpg").default} />
                <h2 className={styles.fontStyle}>{t('gerges')}</h2>
                <p>{t('senior')}</p>
              </GridElement>
              <GridElement xs={12} sm={12} md={4} lg={4}>
                <AvaterImg src={require("../../images/menna_cropped.png").default} />
                <h2 className={styles.fontStyle}>{t('menna')}</h2>
                <p>{t('seniora')}</p>
              </GridElement>
              <GridElement xs={12} sm={12} md={4} lg={4}>
                <AvaterImg src={require("../../images/mohamedimg.png").default} />
                <h2 className={styles.fontStyle}>{t('ramdan')}</h2>
                <p>{t('senior')}</p>
              </GridElement>
            </GridWeb>
            <GridBackEnd container>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <div className={styles.super2}>
                  <h1 className={styles.fontStyle}>{t('back')}</h1>
                </div>
              </Grid>
              <GridElement xs={12} sm={12} md={6} lg={6}>
                <AvaterImg src={require("../../images/ahmed_cropped.png").default} />
                <h2 className={styles.fontStyle}>{t('ahmed')}</h2>
                <p>{t('senior')}</p>
              </GridElement>
              <GridElement xs={12} sm={12} md={6} lg={6}>
                <AvaterImg src={require("../../images/khalid_cropped.png").default} />
                <h2 className={styles.fontStyle}>{t('khaled')}</h2>
                <p>{t('senior')}</p>
              </GridElement>
            </GridBackEnd>
            <GridMobile container>
              <Grid xs={12} sm={12} md={12} lg={12}>
                <div className={styles.super3}>
                  <h1 className={styles.fontStyle} style={{ color: "#235274" }}>
                    {t('mobile')}
                  </h1>
                </div>
              </Grid>
              <GridMobileElements container xs={12} sm={12} md={12} lg={12}>
                <GridElement className={styles.mobileAvater} xs={12} sm={12} md={4} lg={4}>
                  <AvaterImg src={require("../../images/ahmed_cropped.png").default} />
                  <h2 className={styles.fontStyle}>{t('ahmed')}</h2>
                </GridElement>
                <GridElement className={styles.mobileAvater} xs={12} sm={12} md={4} lg={4}>
                  <AvaterImg src={require("../../images/gerges.jpg").default} />
                  <h2 className={styles.fontStyle}>{t('gerges')}</h2>
                </GridElement>
                <GridElement className={styles.mobileAvater} xs={12} sm={12} md={4} lg={4}>
                  <AvaterImg src={require("../../images/khalid_cropped.png").default} />
                  <h2 className={styles.fontStyle}>{t('khaled')}</h2>
                </GridElement>
                <GridElement className={styles.mobileAvater} xs={12} sm={12} md={6} lg={6}>
                  <AvaterImg src={require("../../images/menna_cropped.png").default} />
                  <h2 className={styles.fontStyle}>{t('menna')}</h2>
                </GridElement>
                <GridElement className={styles.mobileAvater} xs={12} sm={12} md={6} lg={6}>
                  <AvaterImg src={require("../../images/mohamedimg.png").default} />
                  <h2 className={styles.fontStyle}>{t('ramdan')}</h2>
                </GridElement>
              </GridMobileElements>
            </GridMobile>
          </GridContainer>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
};

export default Team;
