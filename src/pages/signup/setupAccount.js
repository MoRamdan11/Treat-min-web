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
  SignUpImg,
  GridForm,
  SignUpForm,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
  Button,
  GenderLabel
} from "./setupAccountElements";
import axios from "axios";
import Globals from "../../component/navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
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
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
if (currentMonth < 10) {
  currentMonth = '0' + (currentMonth + 1);
}
if (currentDay < 10) {
  currentDay = '0' + currentDay;
}
var date = currentYear + '-' + (currentMonth) + '-' + currentDay;
function SetupAccount(props) {
  const styles = useStyles();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);
  const [birthDate, setBirthDate] = useState("");
  const [errorBirth, setErrorBirth] = useState(true);
  const [gender, setGender] = useState("male");
  const [errorGender, setErrorGender] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(true);
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(true);
  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if (passwordVal.length >= 8 && passwordVal.length <= 32) {
      if(password === confirmPassword){
        setErrorConfirmPassword(false);
      }
      setPassword(passwordVal);
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  }

  function hnadleConfirmPasswordChange(event) {
    const confirmPasswordVal = event.target.value;
    if (confirmPasswordVal === password) {
      setConfirmPassword(confirmPasswordVal);
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
    if (genderValue === "M" || genderValue === "F") {
      setGender(genderValue);
      setErrorGender(false);
    } else {
      setErrorGender(true);
    }
  }

  function handlePhoneChange(event) {
    const phoneValue = event.target.value;
    if (phoneValue.match(/^\d{11,11}$/)) {
      setPhone(phoneValue);
      setErrorPhone(false);
    } else {
      setErrorPhone(true);
    }
    if (phoneValue.length === 0) {
      setErrorPhone(false);
    }
  }

  function handleNameChange(event){
    const nameVal = event.target.value;
    if(nameVal.match(/^[a-z0-9A-Z_-]{3,15}$/)){
      setName(nameVal);
      setErrorName(false);
    }else{
      setErrorName(true);
    }
  }
  const handleBtnClick = (event) => {
    event.preventDefault();
    if (!errorName && !errorPassword && !errorConfirmPassword &&
      !errorBirth && !errorGender && !errorPhone) {
        axios.post('/api/accounts/register/', {
          email: localStorage.getItem('email'),
          password: password,
          name: "Mohamed",
          phone: phone,
          birth: birthDate,
          gender: gender,
        }).then((response) => {
          console.log(response);
          props.history.push('/login');
        }).catch((error) => {
          console.log(error.response.data);
        });
    } else {
      props.history.push('/SetupAccount');
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
      <StylesProvider jss={jss}>
        <GridContainer container>
          <Grid xs={12} sm={12} md={6} lg={6}>
            <SignUpImg
              src={require("../../images/Add User-amico.png").default}
              alt="Sign-Up"
            />
          </Grid>
          <GridForm xs={12} sm={12} md={6} lg={6}>
            <SignUpForm>
              <h2 style={{ marginTop: "10px" }}>{t('setupaccount')}</h2>
              <TextField
                className={styles.content}
                variant="outlined"
                label={t('userName')}
                required
                onChange={handleNameChange}
                error={errorName}
                onKeyPress={handleEnterClick}
              />
              <FormControl
                className={styles.content}
                required
                variant="outlined"
              >
                <InputLabel
                  color={errorPassword ? "secondary" : "primary"}
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
                  color={errorConfirmPassword ? "secondary" : "primary"}
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
                required
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
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleBirthChange}
                  onKeyPress={handleEnterClick}
                />
              </div>
              <FormControl required error={errorGender} component="fieldset">
                <GenderLabel component="legend">
                  {t('gender')}
                </GenderLabel>
                <RadioGroup
                  onChange={handleGenderChange}
                  onKeyPress={handleEnterClick}
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="M"
                    control={<Radio color="primary" />}
                    label={t('male')}
                  />
                  <FormControlLabel
                    className={styles.radioStyle}
                    value="F"
                    control={<Radio color="primary" />}
                    label={t('female')}
                  />
                </RadioGroup>
              </FormControl>
              <div className={styles.btnStyleOuter}>
                <NavBtn>
                  <NavBtnLink2 to="/login">{t('cancel')}</NavBtnLink2>
                </NavBtn>
                <Button
                  onClick={handleBtnClick}
                >
                  {t('signup')}
                </Button>
              </div>
            </SignUpForm>
          </GridForm>
        </GridContainer>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default SetupAccount;