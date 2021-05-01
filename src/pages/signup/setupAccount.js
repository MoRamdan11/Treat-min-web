import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  GridContainer,
  GridImg,
  SignUpImg,
  GridForm,
  SignUpForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2
} from "./setupAccountElements";

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
    "@media screen and (min-width: 500px) and (max-width: 900px)":{
      width: "400px"
    }
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
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    },
    secondary:{
      main: "#f00"
    }
  }
});
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
if(currentMonth < 10){
  currentMonth = '0' + (currentMonth + 1);
}
if(currentDay < 10){
  currentDay = '0' + currentDay;
}
var date = currentYear+'-'+(currentMonth)+'-'+currentDay;
function SetupAccount(props) {
  const styles = useStyles();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);
  const [birthDate, setBirthDate] = useState("");
  const [errorBirth, setErrorBirth] = useState(false);
  const [gender, setGender] = useState("male");
  const [errorGender, setErrorGender] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);
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
    const confirmPassword = event.target.value;
    if (confirmPassword === password) {
      setConfirmPassword(confirmPassword);
      setErrorConfirmPassword(false);
    } else {
      setErrorConfirmPassword(true);
    }
  }

  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }

  function handleBirthChange(event) {
    const birth = event.target.value;
    console.log(birth);
    console.log(date);
    if (birth && birth <= date) {
      setBirthDate(birth);
      setErrorBirth(false);
    } else {
      setErrorBirth(true);
    }
  }

  function handleGenderChange(event) {
    const genderValue = event.target.value;
    if (genderValue === "male" || genderValue === "female") {
      setGender(genderValue);
      setErrorGender(false);
    } else {
      setErrorGender(true);
    }
  }

  function handlePhoneChange(event) {
    const phoneValue = event.target.value;
    if(phoneValue.match(/^\d{11,11}$/)){
      setPhone(phoneValue);
      setErrorPhone(false);
    }else{
      setErrorPhone(true);
    }
    if(phoneValue.length === 0){
      setErrorPhone(false);
    }
  }

  const handleBtnClick = () =>{
    if(!errorPassword && !errorConfirmPassword &&
      !errorBirth && !errorGender && !errorPhone){
        props.history.push('/login');
      }else{
        props.history.push('/SetupAccount');
      }
  }

  const handleEnterClick = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      handleBtnClick();
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GridContainer container className={styles.gridStyle}>
          <GridImg xs={12} sm={12} md={6} lg={6}>
            <SignUpImg
              src={require("../../images/Add User-amico.png").default}
              alt="Sign-Up"
            />
          </GridImg>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <SignUpForm>
              <h2 style={{ marginTop: "10px" }}>{t('setupaccount')}</h2>
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel
                  color = {errorPassword? "secondary": "primary" } 
                  required htmlFor="outlined-adornment-password"
                >
                {t('password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadlePasswordChange}
                  error={errorPassword}
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
                  labelWidth={80}
                />
              </FormControl>
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel 
                  required htmlFor="outlined-adornment-password"
                  color = {errorConfirmPassword? "secondary": "primary"}
                >
                {t('confirm_Password')}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={visibility ? "text" : "password"}
                  onChange={hnadleConfirmPasswordChange}
                  onKeyPress={handleEnterClick}
                  error={errorConfirmPassword}
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
                <p style={{ color: "red", marginBottom: "5px" }}>
                {t('eightcharcter')}
                </p>
              )}
              <TextField
                className={styles.content}
                onChange={handlePhoneChange}
                onKeyPress={handleEnterClick}
                variant="outlined"
                label={t('number')}
                type="tel"
                error={errorPhone}
              />
              <div>
                <p
                  style={{
                    float: "left",
                    clear: "both",
                    width: "100px",
                    fontWeight: "bold"
                  }}
                >
                {t('date')}
                </p>
                <TextField
                  id="date"
                  type="date"
                  error={errorBirth}
                  className={styles.content}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleBirthChange}
                  onKeyPress={handleEnterClick}
                />
              </div>
              <FormControl error={errorGender} component="fieldset">
                <FormLabel className={styles.genderLabel} component="legend">
                {t('gender')}
                </FormLabel>
                <RadioGroup
                  onChange={handleGenderChange}
                  onKeyPress={handleEnterClick}
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label={t('male')}
                  />
                  <FormControlLabel
                    className={styles.radioStyle}
                    value="female"
                    control={<Radio color="primary" />}
                    label={t('female')}
                  />
                </RadioGroup>
              </FormControl>
              <div className={styles.btnStyleOuter}>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <NavBtn className={styles.btnStyle}>
                  <NavBtnLink
                    onClick={handleBtnClick}
                    to={
                      errorPassword ||
                        errorConfirmPassword ||
                        errorBirth ||
                        errorGender ||
                        errorPhone? "/SetupAccount" : "/login"
                    }
                  >
                  {t('signup')}
                  </NavBtnLink>
                </NavBtn>
              </div>
            </SignUpForm>
          </GridForm>
        </GridContainer>
      </ThemeProvider>
    </div>
  );
}

export default SetupAccount;