import React from "react";
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import Button from "@material-ui/core/Button";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});

const useStyles = makeStyles({
  card: {
    height: 80,
    display: "flex",
  },
  app: {
    backgroundColor: "#FFF",
    width: "60%",
    border: "1px solid #d8e3e7",
  },
  change: {
    backgroundColor: "#FFF",
    width: "20%",
  },
  cancel: {
    backgroundColor: "#FFF",
    width: "20%",
  },
  service: { padding: "0.5em", margin: "0.25em 0 0 1.25em", color: "#19A25D" },
  time: { margin: "0 0 0 2em", color: "#91c788" },
  ChangeBtn: {
    minWidth: "auto",
    border: "1px solid #d8e3e7",
    outline: "none",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    color: "#235274",
  },
  CancelBtn: {
    minWidth: "auto",
    border: "1px solid #d8e3e7",
    outline: "none",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    color: "#c64756",
  },
  ListAltOutlinedIcon :{
    root: {
      "body[dir=rtl] &": {
        transform: "scaleX(-1)"
      }
    }
  }
});
function Appointment({ service, time, date }) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div className={classes.card}>
      <div className={classes.app}>
        <h3 className={classes.service}>{service}</h3>
        <p className={classes.time}>
          {time} - {date}
        </p>
      </div>
      <div className={classes.change}>
        <Button title={t('change')} square className={classes.ChangeBtn}>
          <ListAltOutlinedIcon />
        </Button>
      </div>
      <div className={classes.cancel}>
        <Button title={t('cancel')}square className={classes.CancelBtn}>
          <CancelOutlinedIcon />
        </Button>
      </div>
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default Appointment;
