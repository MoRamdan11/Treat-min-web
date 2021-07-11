import React, { useState, useEffect } from "react";
import { makeStyles, createMuiTheme, ThemeProvider,StylesProvider,
  jssPreset, } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import cookies from 'js-cookie';
import i18next from 'i18next'
import rtl from "jss-rtl";
import { setSideBar } from "../../Redux/actions/filterClinics";
import { create } from "jss";
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
import { connect } from "react-redux";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
const overrides = {
  TextField: {
    root: {
      "body[dir=rtl] &": {
        transform: "scaleX(-1)"
      }
    }
  }
};
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'eg',
  },
]

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
  
  useEffect(() => {
    props.dispatch(setSideBar(false));
  }, [])

  function handleEmailChange(event) {
    const emailValue = event.target.value;
    setEmailRepeated(false);
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
        localStorage.setItem('email', email);
        props.history.push('/verifiyCode');
      }).catch((error) => {
        setEmailRepeated(error.response.data);
        props.history.push('/SignUp');
      });
    }
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (errorEmail) {
        setInValidEmail(true);
        props.history.push('/SignUp');
      } else {
        //valid email 
        setInValidEmail(false);
        axios.post('/api/accounts/register-email/', { "email": email }).then((response) => {
          localStorage.setItem('email', email);
          props.history.push('/verifiyCode');
        }).catch((error) => {
          setEmailRepeated(error.response.data);
          props.history.push('/SignUp');
        });
      }
    }
  }
  const { t } = useTranslation();
  const ltrTheme = createMuiTheme({ direction: "ltr" });
  const rtlTheme = createMuiTheme({ direction: "rtl", overrides });
  const [isRtl, setIsRtl] = React.useState(false);
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  return (
    <div>
      <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
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
                variant="standard"
                label={t('email')}
                required
                error={errorEmail}
                dir={currentLanguage.dir || 'ltr'}
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

export default connect()(SignUp1);
