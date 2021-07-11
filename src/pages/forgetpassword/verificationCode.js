import React, { useState, useEffect } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import OtpInput from 'react-otp-input';
import { setSideBar } from "../../Redux/actions/filterClinics";

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
import { connect } from "react-redux";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
var error = {
  border: "1px solid red",
  color: "red"
}
var inputStyle = {
  width: "3rem",
  height: "3rem",
  margin: "0 0.5rem",
  fontSize: "2rem",
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.3)",
  borderColor: "#19a25d",
  //color: "#19a25d"
}
var containerStyle = {
  marginBottom: "10px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
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
    invalidCode: false,
    code: "",
    errorCode: false,
    incompliteCode: false
  });
  useEffect(() => {
    props.dispatch(setSideBar(false));
  }, [])
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
  }
  function handleCodeChange2(event) {
    const value = event;
    setState({ code: value });
  }

  function handleResend() {
    setState({
      code: "",
      errorCode: true,
      invalidCode: false,
      incompliteCode: false
    });
    axios.post('/api/accounts/password-email/', { "email": localStorage.getItem('email') }).then((response) => {
      props.history.push('/verificationCode');
    })
  }

  function handlebtnClick(event) {
    event.preventDefault();
    if (!state.errorCode && state.code && state.code.length === 4) {
      setState({ invalidCode: false });
      const email = localStorage.getItem('email');
      const codeVal = state.code;
      axios.patch('/api/accounts/password-code/', {
        email: email,
        code: parseInt(codeVal, 10)
      }).then((response) => {
        props.history.push('/resetPassword');
      }).catch((error) => {
        setState({
          invalidCode: true,
          errorCode: true
        });
      })
    } else {
      if (!state.code || state.code.length < 4) {
        setState({ incompliteCode: true });
      }
      setState({ invalidCode: true });
      setState({ errorCode: true });
      props.history.push('/verificationCode');
    }
  }
  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!state.errorCode && state.code && state.code.length === 4) {
        setState({ invalidCode: false });
        const email = localStorage.getItem('email');
        const codeVal = state.code;
        axios.patch('/api/accounts/password-code/', {
          email: email,
          code: parseInt(codeVal, 10)
        }).then((response) => {
          props.history.push('/resetPassword');
        }).catch((error) => {
          setState({
            invalidCode: true,
            errorCode: true
          });
        })
      } else {
        if (!state.code || state.code.length < 4) {
          setState({ incompliteCode: true });
        }
        setState({ invalidCode: true });
        setState({ errorCode: true });
        props.history.push('/verificationCode');
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
              <OtpInput
                separator={<span style={{ margin: "0px" }}>-</span>}
                onChange={handleCodeChange2}
                errorStyle={error}
                hasErrored={state.errorCode}
                value={state.code}
                inputStyle={inputStyle}
                containerStyle={containerStyle}
                onKeyPress={handleEnterKey}
                numInputs={4}
                isInputNum={false}
                isInputSecure={false}
              />
              {state.invalidCode && <p style={{ color: "red" }}>{t('wrongCode')}</p>}
              {state.incompliteCode && <p style={{ color: "red" }}>{t('incompliteCode')}</p>}
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

export default connect()(VerificationCode);
