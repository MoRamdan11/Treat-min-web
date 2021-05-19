import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import EditAvatar from "./EditAvatar";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { NavBtn, NavBtnLink, NavBtnLink2 } from "./Buttons";
import { useHistory, NavLink } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  

const theme = createMuiTheme({
  direction: Globals.direction,
  palette: {
    primary: {
      main: "#19a25d",
    },
    secondary: {
      main: "#F00",
    },
  },
});

const useStyles = makeStyles({
  container: {
    backgroundColor: "#235274",
  },
  wrapper: {
    margin: "0 auto",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      width: "90%",
    },
    "@media screen and (max-width: 1000px)": {
      fontSize: "12px",
    },
  },
  columnOne: {
    backgroundColor: "#235274",
    display: "flex",
    flexDirection: "column",
    width: "55%",
    marginTop: "2em",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  columnTwo: {
    backgroundColor: "#FFF",
    width: "35%",
    margin: "3em 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  userInfo: {
    width: "80%",
    backgroundColor: "#FFF",
    margin: "0 auto",
    borderRadius: "20px",
  },
  input: {
    margin: "0.75em auto",
    width: "80%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginTop: "0",
    marginLeft: "1em",
  },
  btnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
    marginLeft: "10px",
  },
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
  },
  showLabel: {
    margin: "0 auto",
    color: "red",
  },
  hideLabel: {
    display: "none",
  },
  signUp: {
    color: "blue",
    margin: "1em auto",
  },
});

const name = "Gerges Wageh";
const phone = "01286516312";
const email = "GergesWageh2580@gmail.com";

function EditUserInfo() {
  const history = useHistory();
  const classes = useStyles();
  const [errorEmail, setErrorEmail] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: name,
    phone: phone,
    email: email,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "email") {
      if (!value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }
    setUserInfo((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleError = () => {
    if (!userInfo.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };
  const { t } = useTranslation();
  return (
    <StylesProvider jss={jss}>
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <div className={classes.columnOne}>
            <img src={require("../../images/EditInfo.png").default} alt="img" />
          </div>
          <div className={classes.columnTwo}>
            <EditAvatar />
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                name="name"
                onChange={handleChange}
                value={userInfo.name}
                label={t('username')}
                variant="outlined"
                color="green"
                className={classes.input}
              />
              <TextField
                onChange={handleChange}
                value={userInfo.phone}
                name="phone"
                label={t('number')}
                variant="outlined"
                color="green"
                className={classes.input}
              />

              <TextField
                onChange={handleChange}
                value={userInfo.email}
                helperText={errorEmail ? "Invalid email!" : ""}
                name="email"
                label={t('email')}
                variant="outlined"
                color="green"
                className={classes.input}
                error={errorEmail}
              />
              <NavLink className={classes.signUp} to="/ChangePassword">
              {t('changepassword')}
              </NavLink>
              <div className={classes.btnStyleOuter}>
                <NavBtn className={classes.btnStyle}>
                  <NavBtnLink2 to="/MyAccount">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <NavBtn className={classes.btnStyle}>
                  <NavBtnLink to={!errorEmail && "/"}>{t('ok')}</NavBtnLink>
                </NavBtn>
              </div>
            </form>
          </div>
        </div>
      </ThemeProvider>
    </div>
    </StylesProvider>
  );
}

export default EditUserInfo;
