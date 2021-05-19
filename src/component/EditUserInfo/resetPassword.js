import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  GridContainer,
  GridImg,
  ForgetPasswordImg,
  GridForm,
  ForgetPasswordForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from "./resetPasswordElements";
import Globals from "../navbar/global"

const theme = createMuiTheme({
  direction:Globals.direction,
  palette: {
    primary: {
      main: "#19a25d"
    },
    secondary: {
      main: "#f00"
    }
  }
});

const useStyles = makeStyles({
  content: {
    marginTop: "20px",
    width: "100%"
  },
  loginBtn: {
    marginTop: "50px"
  },
  card: {
    height: "50%"
  },
  gridStyle: {
    backgroundColor: "#235274",
    width: "100%",
    margin: "0"
  },
  birth: {
    width: "80px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "5px"
  },
  genderLabel: {
    color: "black",
    fontWeight: "bold"
  },
  radioStyle: {
    position: "relative",
    left: "20px"
  },
  btnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
    marginLeft: "10px"
  },
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px"
  }
});

function ResetPassword(props) {
  const styles = useStyles();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);
  const [visibility, setVisibility] = useState(false);

  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if (passwordVal.length >= 8 && passwordVal.length <= 32) {
      setPassword(passwordVal);
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  }

  function hnadleConfirmPasswordChange(event) {
    const confirmNewPassword = event.target.value;
    if (confirmNewPassword === password) {
      setConfirmPassword(confirmNewPassword);
      setErrorConfirmPassword(false);
    } else {
      setErrorConfirmPassword(true);
    }
  }

  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }
  const handleBtnClick = () => {
    if (!errorPassword && !errorConfirmPassword) {
      props.history.push('/login');
    } else {
      props.history.push('/resetPassword');
    }
  }
  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleBtnClick();
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container>
          <GridImg xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordImg
              src={require("../../images/resetPassword.png").default}
              alt="ForgetPassword"
            />
          </GridImg>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordForm>
              <h2 style={{ marginTop: "10px" }}>{t('choose_new_password')}</h2>
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel
                  color = {errorPassword? "secondary": "primary"} 
                  required htmlFor="outlined-adornment-password"
                >
                {t('new_password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadlePasswordChange}
                  onKeyPress={handleEnterClick}
                  error={errorPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleVisibility}
                      >
                        {visibility ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={120}
                />
              </FormControl>
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel 
                  color={errorConfirmPassword? "secondary": "primary"}
                  required htmlFor="outlined-adornment-password"
                >
                {t('confirm_password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadleConfirmPasswordChange}
                  error={errorConfirmPassword}
                  onKeyPress={handleEnterClick}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleVisibility}
                      >
                        {visibility ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={145}
                />
              </FormControl>
              {(errorPassword || errorConfirmPassword) && (
                <p style={{ marginTop: "10px", color: "red" }}>
                {t('eightpassword')}
                </p>
              )}
              <div className={styles.btnStyleOuter}>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink
                    to={(errorPassword || errorConfirmPassword) ? "/AccountResetPassword" : "/EditUserInfo"}
                    onClick={handleBtnClick}
                  >
                  {t('sumbit')}
                  </NavBtnLink>
                </NavBtn>
              </div>
            </ForgetPasswordForm>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default ResetPassword;
