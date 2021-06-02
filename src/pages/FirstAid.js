import React from "react";
import Card from "../component/FirstAid/Card";
import { makeStyles } from "@material-ui/core/styles";
import { NavBtnLink } from "../component/navbar/NavBarElement";
import { useTranslation } from "react-i18next";



const useStyles = makeStyles({
  container: {
    width: "100vw",
    backgroundColor: "#a6d6d6",
  },
  cardsWrapper: {
    width: "100vw",
    backgroundColor: "#a6d6d6",
    margin: "0 auto",
    padding: "1px 0",
    "@media screen and (min-width: 768px)": {
      width: "65vw",
    },
  },

  row: {
    display: "flex",
    margin: "0 auto",
    width: "100%",
    justifyContent: "center",
    marginBottom: "15px",
  },

  header: {
    width: "200px",
    height: "70px",
    margin: "30px  auto 40px auto",
    backgroundColor: "#fff",
    borderRadius: "30px",
    padding: "8px",
  },
  title: {
    color: "#4ca1a3",
    margin: "0",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "0.1px",
  },
  subTitle: {
    color: "#025955",
    margin: "0",
    textAlign: "center",
    letterSpacing: "0.1px",
  },
  btnContainer: {
    textAlign: "center",
    height: "100px",
    padding: "40px",
  },
});
function FirstAid() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.cardsWrapper}>
        <div className={classes.header}>
          <h3 className={classes.title}>EMERGENCY</h3>
          <h2 className={classes.subTitle}>
            <strong>FIRST AID</strong>
          </h2>
        </div>
        <div className={classes.row}>
          <Card
            num="1"
            src={require("../images/FirstAid1_1.jpeg").default}
            description={t('call')}
          />
          <Card
            num="2"
            src={require("../images/FirstAid1_2.jpg").default}
            description={t('checkvital')}
            direction="right"
            color="light"
            desc="right"
          />
        </div>
        <div className={classes.row}>
          <Card
            num="3"
            src={require("../images/FirstAid1_3.jpg").default}
            description={t('liftchin')}
          />
          <Card
            num="4"
            src={require("../images/FirstAid1_4.jpg").default}
            description={t('rescuebreath')}
            direction="right"
            color="light"
            desc="right"
          />
        </div>
        <div className={classes.row}>
          <Card
            num="5"
            src={require("../images/FirstAid1_5.jpg").default}
            description={t('cpr')}
          />
          <Card
            num="6"
            src={require("../images/FirstAid1_6.jpg").default}
            description={t('turnonside')}
            direction="left"
            color="light"
            desc="left"
          />
        </div>
      </div>
      <div className={classes.btnContainer}>
        <NavBtnLink className="btn" to="/Maps">
          {t("nearesthospital")}
        </NavBtnLink>
      </div>
    </div>
  );
}

export default FirstAid;
