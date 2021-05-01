import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  GridContainer,
  GridImg,
  ForgetPasswordImg,
  GridForm,
  ForgetPasswordForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from "./firstSignUpElements";
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

function SignUp1(props) {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [inValidEmail, setInValidEmail] = useState(false);
  function handleEmailChange(event) {
    const emailValue = event.target.value;
    if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setEmail(emailValue);
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }
  const handleSignClick = () => {
    if(errorEmail){
      setInValidEmail(true);
      props.history.push('/SignUp');
    }else{
      setInValidEmail(false);
      props.history.push('/verifiyCode');
    }
  }

  const handleEnterClick = (event) => {
    if(event.key === 'Enter'){
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
              src={require("../../images/signUpNew2.png").default}
              alt="ForgetPassword"
            />
          </GridImg>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordForm>
              <h2 style={{ marginTop: "10px" }}>Create Your Account</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                onKeyPress={handleEnterClick}
                variant="outlined"
                label={t('email')}
                required
                error={errorEmail}
              />
              {inValidEmail && <h4 className = {styles.notValidEmail}>{t('emailnotvalid')}</h4>}
              <div className={styles.btnStyleOuter}>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <NavBtn onClick = {handleSignClick}  className={styles.btnStyle}>
                  <NavBtnLink
                    to={errorEmail ? "/SignUp" : "/verifiyCode"}
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

export default SignUp1;
