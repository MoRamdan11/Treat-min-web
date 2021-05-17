import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2
} from "../elements";
import { useTranslation } from "react-i18next";
import axios from "axios";

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
    width: "100%",
    marginBottom: "5px"
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
  const [emailRepeated, setEmailRepeated] = useState(false);
  function handleEmailChange(event) {
    const emailValue = event.target.value;
    if (emailValue.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setEmail(emailValue);
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  }
  function handleSignClick(event) {
    event.preventDefault();
    if (errorEmail) {
      setInValidEmail(true);
      props.history.push('/SignUp');
    } else {
      //valid email 
      setInValidEmail(false);
      axios.post('/api/accounts/register-email/', { "email": email }).then((response) => {
        console.log(response.data.details);
        localStorage.setItem('email', email);
        props.history.push('/verifiyCode');
      }).catch((error) => {
        console.log(error.response.data);
        setEmailRepeated(error.response.data);
        props.history.push('/SignUp');
      });
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
          <Grid xs={12} sm={12} md={6} lg={6}>
            <Img
              src={require("../../images/signUpNew2.png").default}
              alt="ForgetPassword"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form onSubmit={handleSignClick}>
              <h2 style={{ marginTop: "10px" }}>{t('createAccount')}</h2>
              <TextField
                className={styles.content}
                onChange={handleEmailChange}
                onKeyPress={handleEnterClick}
                variant="outlined"
                label={t('email')}
                required
                error={errorEmail}
              />
              {inValidEmail && <p className={styles.notValidEmail}>{t('emailnotvalid')}</p>}
              {emailRepeated && <p className={styles.notValidEmail}>{t('repeatEmail')}</p>}
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button>
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

export default SignUp1;
