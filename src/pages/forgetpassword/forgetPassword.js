import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

//import NavBar from "../../component/navbar/index";
import Navbar from "../../component/navbar/index";
import Sidebar from "../../component/SideBar";
//import { btnStyle, newStyle } from "./loginElements";
import {
  GridContainer,
  GridImg,
  ForgetPasswordImg,
  GridForm,
  ForgetPasswordForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from "./forgetPasswordElements";
import { useTranslation, initReactI18next } from "react-i18next";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
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
  },
  notValidEmail: {
    color: "rgb(240, 84, 84)",
    margin: "10px 0 0 0"
  }
});

function ForgetPassword(props) {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [inValidEmail, setInValidEmail] = useState(false);
  function handleEmailChange(event) {
    const emailValue = event.target.value;
    if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setEmail(emailValue);
      setErrorEmail(false);
      setInValidEmail(false);
    } else {
      setErrorEmail(true);
    }
  }
  const handleSignClick = () => {
    if (errorEmail) {
      setInValidEmail(true);
      props.history.push('/forgetPassword');
    } else {
      setInValidEmail(false);
      props.history.push('/verificationCode');
    }
  }
  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSignClick();
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container>
          <GridImg xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordImg
              src={require("../../images/Forgot password.png").default}
              alt="ForgetPassword"
            />
          </GridImg>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordForm>
              <h2 style={{ marginTop: "10px" }}>{t('findaccount')}</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                variant="outlined"
                label={t('email')}
                required
                error={errorEmail}
                onKeyPress={handleEnterClick}
              />
              {inValidEmail && <p style={{ color: "red", marginTop: "5px" }}>
              {t('emailnotfound')}
                </p>}
              <div className={styles.btnStyleOuter}>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <NavBtn
                  className={styles.btnStyle}
                >
                  <NavBtnLink
                    onClick={handleSignClick}
                    to={errorEmail ? "/forgetPassword" : "/verificationCode"}
                  >
                  {t('send_ver_code')}
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

export default ForgetPassword;
