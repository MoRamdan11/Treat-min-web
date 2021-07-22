import React, { useState, useEffect } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2
} from "../elements";
import { useTranslation, initReactI18next } from "react-i18next";
import { setSideBar } from "../../Redux/actions/filterClinics";
import axios from "axios";
import { connect } from "react-redux";
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
  const [emailnotfound, setEmailNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    props.dispatch(setSideBar(false));
  }, [])

  function handleEmailChange(event) {
    const emailValue = event.target.value;
    if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setEmail(emailValue);
      setErrorEmail(false);
      setInValidEmail(false);
      setEmailNotFound(false);
    } else {
      setErrorEmail(true);
    }
  }
  const handleSignClick = (event) => {
    event.preventDefault();
    if (errorEmail && !emailnotfound) {
      setInValidEmail(true);
      props.history.push('/forgetPassword');
    } else {
      axios.post('/api/accounts/password-email/', { email: email }).then((response) => {
        localStorage.setItem('email', email);
        setInValidEmail(false);
        props.history.push('/verificationCode');
      }).catch((error) => {
        setEmailNotFound(true);
        setErrorEmail(true);
      })
    }
  }
  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (errorEmail && !emailnotfound) {
        setInValidEmail(true);
        props.history.push('/forgetPassword');
      } else {
        axios.post('/api/accounts/password-email/', { email: email }).then((response) => {
          localStorage.setItem('email', email);
          setInValidEmail(false);
          props.history.push('/verificationCode');
        }).catch((error) => {
          setEmailNotFound(true);
          setErrorEmail(true);
        })
      }
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Img
              src={require("../../images/Forgot password.png").default}
              alt="ForgetPassword"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form>
              <h2 style={{ marginTop: "10px" }}>{t('findaccount')}</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                variant="standard"
                label={t('email')}
                required
                error={errorEmail}
                onKeyPress={handleEnterClick}
              />
              {inValidEmail && <p style={{ color: "red", marginTop: "5px" }}>
                {t('emailnotfound')}
              </p>}
              {emailnotfound &&
                <div style={{ marginTop: "5px", paddingBottom: "2px" }}>
                  <p style={{ color: "red", marginTop: "5px" }}>
                    {t('emailRejected')}
                  </p>
                  <h5 style={{ display: "inline" }}>
                    {t('newuser')}&nbsp;&nbsp;
                  </h5>
                  <NavLink className={styles.signUp} to="/SignUp">
                    {t('signup')}
                  </NavLink>
                </div>
              }
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button
                  onClick={handleSignClick}
                >
                  {t('send_ver_code')}
                </Button>
              </div>
            </Form>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default connect()(ForgetPassword);
