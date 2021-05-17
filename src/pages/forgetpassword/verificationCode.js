import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
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
import { useTranslation, initReactI18next } from "react-i18next";
import axios from "axios";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});

const useStyles = makeStyles({
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px"
  },
  code: {
    width: "50px",
    margin: "10px",
    backgroundColor: "white",
    color: "black",
    "@media screen and (max-width: 400px)": {
      margin: "10px 5px 10px 5px"
    },
    "@media screen and (max-width: 320px)": {
      margin: "10px 15px 10px 15px"
    }
  },
  resend: {
    textDecoration: "underLine",
    color: "blue"
  },
});

function VerificationCode(props) {
  const styles = useStyles();
  const [state, setState] = useState({
    code1: "",
    errorcode1: true,
    code2: "",
    errorcode2: true,
    code3: "",
    errorcode3: true,
    code4: "",
    errorcode4: true,
    invalidCode: false
  });
  const handleChange = (event) => {
    const name = event.target.name;
    var value = event.target.value;
    if (!value || value.match(/^\d{1,1}$/)) {
      setState({
        ...state,
        [name]: value,
        ['error' + name]: false
      });
    } else {
      setState({
        ...state,
        ['error' + name]: true
      });
    }
    if (value.length > 1) {
      value = value.substring(value.length - 1);
      setState({
        ...state,
        [name]: value,
        ['error' + name]: false
      });
    }
    if (value.length === 0) {
      setState({
        ...state,
        [name]: '',
        ['error' + name]: true
      });
    }
    console.log(value);
  }

  function handleResend() {
    setState({
      code1: "",
      errorcode1: true,
      code2: "",
      errorcode2: true,
      code3: "",
      errorcode3: true,
      code4: "",
      errorcode4: true,
      invalidCode: false
    });
    axios.post('/api/accounts/password-email/', { "email": localStorage.getItem('email') }).then((response) => {
      console.log(response.data.details);
      props.history.push('/verificationCode');
    }).catch((error) => {
      console.log(error.response.data);
    });
  }

  function handlebtnClick(event) {
    event.preventDefault();
    if (!state.errorcode1 && !state.errorcode2 && !state.errorcode3 && !state.errorcode4) {
      setState({ invalidCode: false });
      const email = localStorage.getItem('email');
      console.log(email);
      const codeVal = state.code1 + state.code2 + state.code3 + state.code4;
      console.log(codeVal);
      axios.patch('/api/accounts/password-code/', {
        email: email,
        code: parseInt(codeVal, 10)
      }).then((response) => {
        props.history.push('/resetPassword');
        console.log(response);
      }).catch((error) => {
        setState({
          invalidCode: true,
          errorcode1: true,
          errorcode2: true,
          errorcode3: true,
          errorcode4: true
        });
        console.log(error.response.data);
      })
    } else {
      setState({ invalidCode: true });
      props.history.push('/verificationCode');
    }
  }
  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (!state.errorcode1 && !state.errorcode2 && !state.errorcode3 && !state.errorcode4) {
          setState({ invalidCode: false });
          const email = localStorage.getItem('email');
          console.log(email);
          const codeVal = state.code1 + state.code2 + state.code3 + state.code4;
          console.log(codeVal);
          axios.patch('/api/accounts/password-code/', {
            email: email,
            code: parseInt(codeVal, 10)
          }).then((response) => {
            props.history.push('/resetPassword');
            console.log(response);
          }).catch((error) => {
            setState({
              invalidCode: true,
              errorcode1: true,
              errorcode2: true,
              errorcode3: true,
              errorcode4: true
            });
            console.log(error.response.data);
          })
        } else {
          setState({ invalidCode: true });
          props.history.push('/verificationCode');
        }
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
              src={require("../../images/Authentication-pana.png").default}
              alt="ForgetPassword"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <Form onSubmit={handlebtnClick}>
              <h2 style={{ marginTop: "10px" }}> {t('enter_ver_code')}</h2>
              <TextField
                className={styles.code}
                variant="outlined"
                required
                name={"code1"}
                onChange={handleChange}
                value={state.code1}
                error={state.errorcode1}
              />
              <TextField
                className={styles.code}
                variant="outlined"
                required
                name={"code2"}
                onChange={handleChange}
                value={state.code2}
                error={state.errorcode2}
              />
              <TextField
                className={styles.code}
                variant="outlined"
                required
                name={"code3"}
                onChange={handleChange}
                value={state.code3}
                error={state.errorcode3}
              />
              <TextField
                className={styles.code}
                variant="outlined"
                required
                name={"code4"}
                onChange={handleChange}
                onKeyPress={handleEnterKey}
                value={state.code4}
                error={state.errorcode4}
              />
              {state.invalidCode && <p style={{ color: "red" }}>{t('wrongCode')}</p>}
              <p>
                {t('dont_recieve_code')}&nbsp;&nbsp;
                <NavLink
                  onClick={handleResend}
                  className={styles.resend}
                  to="/verificationCode"
                >
                  {t('resend')}
                </NavLink>
              </p>
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button  >
                  {t('continue')}
                </Button>
              </div>
            </Form>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default VerificationCode;
