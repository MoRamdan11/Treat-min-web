import React, { useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import {
  GridContainer,
  GridImg,
  ForgetPasswordImg,
  GridForm,
  ForgetPasswordForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from "./verificationCodeElements";
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
    width: "150px"
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
  birth: {
    width: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "20px",
    backgroundColor: "white",
    color: "black"
  },
  birth2: {
    width: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "white"
  },
  filledBirth: {
    width: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "20px",
    backgroundColor: "#19a25d",
    color: "white"
  },
  resend: {
    textDecoration: "underLine",
    color: "blue"
  }
});

function VerificationCode(props) {
  const styles = useStyles();
  const [code1, setCode1] = useState("");
  const [errorCode1, setErrorCode1] = useState(true);
  const [code2, setCode2] = useState("");
  const [errorCode2, setErrorCode2] = useState(true);
  const [code3, setCode3] = useState("");
  const [errorCode3, setErrorCode3] = useState(true);
  const [code4, setCode4] = useState("");
  const [errorCode4, setErrorCode4] = useState(true);
  function handleCode1(event) {
    const code1 = event.target.value;
    if (!code1 || code1.match(/^\d{1,1}$/)) {
      setCode1(code1);
      setErrorCode1(false);
    }
    if (code1.length === 0) {
      setErrorCode1(true);
    }
    if (code1.length > 1) {
      setCode1(code1.substring(code1.length - 1));
    }
  }
  function handleCode2(event) {
    const code2 = event.target.value;
    if (!code2 || code2.match(/^\d{1,1}$/)) {
      setCode2(code2);
      setErrorCode2(false);
    }
    if (code2.length === 0) {
      setErrorCode2(true);
    }
    if (code2.length > 1) {
      setCode2(code2.substring(code2.length - 1));
    }
  }
  function handleCode3(event) {
    const code3 = event.target.value;
    if (!code3 || code3.match(/^\d{1,1}$/)) {
      setCode3(code3);
      setErrorCode3(false);
    }
    if (code3.length === 0) {
      setErrorCode3(true);
    }
    if (code3.length > 1) {
      setCode3(code3.substring(code3.length - 1));
    }
  }
  function handleCode4(event) {
    const code4 = event.target.value;
    if (!code4 || code4.match(/^\d{1,1}$/)) {
      setCode4(code4);
      setErrorCode4(false);
    }
    if (code4.length === 0) {
      setErrorCode4(true);
    }
    if (code4.length > 1) {
      setCode4(code4.substring(code4.length - 1));
      setErrorCode4(false);
    }
  }

  function handleResend() {
    setCode1("");
    setCode2("");
    setCode3("");
    setCode4("");
    setErrorCode1(true);
    setErrorCode2(true);
    setErrorCode3(true);
    setErrorCode4(true);
  }

  function handlebtnClick() {
    if (code1 === "") {
      setErrorCode1(true);
    }
    if (code2 === "") {
      setErrorCode2(true);
    }
    if (code3 === "") {
      setErrorCode3(true);
    }
    if (code4 === "") {
      setErrorCode4(true);
    }
    if(!errorCode1 && !errorCode2 && !errorCode3 && !errorCode4){
      
      props.history.push('/resetPassword');
    }
  }
  function handleEnterKey(event){
    if(event.key === 'Enter'){
      if (event.key === 'Enter') {
        event.preventDefault();
        handlebtnClick();
      }
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container>
          <GridImg xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordImg
              src={require("../../images/Authentication-pana.png").default}
              alt="ForgetPassword"
            />
          </GridImg>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <ForgetPasswordForm>
              <h2 style={{ marginTop: "10px" }}> {t('enter_ver_code')}</h2>
              <TextField
                className={styles.birth}
                variant="outlined"
                required
                onChange={handleCode1}
                value={code1}
                error={errorCode1}
              />
              <TextField
                className={styles.birth}
                variant="outlined"
                required
                onChange={handleCode2}
                value={code2}
                error={errorCode2}
              />
              <TextField
                className={styles.birth}
                variant="outlined"
                required
                onChange={handleCode3}
                value={code3}
                error={errorCode3}
              />
              <TextField
                className={styles.birth2}
                variant="outlined"
                required
                onChange={handleCode4}
                value={code4}
                error={errorCode4}
                onKeyPress={handleEnterKey}
              />
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
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink2 to="/login">Cancel</NavBtnLink2>
                </NavBtn>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink
                    onClick={handlebtnClick}
                    to={
                      errorCode1 || errorCode2 || errorCode3 || errorCode4
                        ? "/verificationCode"
                        : "/resetPassword"
                    }
                  >
                  {t('continue')}
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

export default VerificationCode;
