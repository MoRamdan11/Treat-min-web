import React, { useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import Button from "@material-ui/core/Button";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import axios from "axios";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});

const useStyles = makeStyles({
  card: {
    //height: 80,
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
  ListAltOutlinedIcon: {
    root: {
      "body[dir=rtl] &": {
        transform: "scaleX(-1)"
      }
    }
  }
});

function Appointment({ service, time, date, drName, state, type, appointmentId }) {
  const classes = useStyles();
  const [cancel, setCancel] = useState(false);
  const { t } = useTranslation();
  const handleCancel = (e) => {
    e.preventDefault();
    axios.delete(`/api/user/appointments/${type}/${appointmentId}/cancel/`, {
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
    }).then((response) => {
      console.log(response);
      setCancel(true);
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div className={classes.card}>
          <div className={classes.app}>
            {!drName && <h3 className={classes.service}>{service}</h3>}
            {drName && <h3 className={classes.service}>{t('dr')}: {drName}</h3>}
            {drName && <p className={classes.time}>{service}</p>}
            <p className={classes.time}>
              {time}  ({date})
            </p>
          </div>
          {cancel ?
            <div style={{ width: "20%", paddingTop: state == "W" ? "5%" : "3%", textAlign: "center", backgroundColor:"#f54748" }} >
              Canceled
            </div>
            :
            <div style={{ width: "20%", paddingTop: state == "W" ? "5%" : "3%", textAlign: "center", backgroundColor: state == "W" ? "#ffefa0" : " #3CB371" }} >
              {state == "W" ? "Waiting" : "Accepted"}
            </div>
          }
          <div className={classes.cancel}>
            <Button disabled={cancel} onClick={handleCancel} title={t('cancel')} square className={classes.CancelBtn}>
              <CancelOutlinedIcon />
            </Button>
          </div>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default Appointment;
