import React, { useState, useEffect } from "react";
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
import Input from '@material-ui/core/Input';
import { useTranslation, initReactI18next } from "react-i18next";
import { setSideBar } from "../../Redux/actions/filterClinics";
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
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
import { connect } from "react-redux";

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  dob: {
    color: "green"
  },
  radioStyle: {
    margin: "20px",
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
  const [failedPassword, setFailedPassword] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [errorBirth, setErrorBirth] = useState(true);
  const [failedBirth, setBirthFailed] = useState(false);
  const [gender, setGender] = useState("male");
  const [errorGender, setErrorGender] = useState(true);
  const [failedGender, setFailedGender] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(true);
  const [failedPhone, setFailedPhone] = useState(false);
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(true);
  const [failedName, setFailedName] = useState(false);

  useEffect(() => {
    props.dispatch(setSideBar(false));
  }, [])

  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if (passwordVal.length >= 8 && passwordVal.length <= 32 && !passwordVal.match(/^\d{8,32}$/)) {
      if (passwordVal === confirmPassword && passwordVal !== "") {
        setFailedPassword(false);
        setErrorConfirmPassword(false);
      }
      else {
        setErrorConfirmPassword(true);
      }
      setPassword(passwordVal);
      setErrorPassword(false);
    } else {
      setPassword(passwordVal);
      setErrorPassword(true);
      setErrorConfirmPassword(true);
    }
  }

  function hnadleConfirmPasswordChange(event) {
    const confirmPasswordVal = event.target.value;
    if (confirmPasswordVal === password) {
      setFailedPassword(false);
      setConfirmPassword(confirmPasswordVal);
      setErrorConfirmPassword(false);
    } else {
      setConfirmPassword(confirmPasswordVal);
      setErrorConfirmPassword(true);
    }
  }

  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }

  function handleBirthChange(event) {
    const birth = event.target.value;
    if (birth && birth <= date) {
      setBirthDate(birth);
      setErrorBirth(false);
      setBirthFailed(false);
    } else {
      setErrorBirth(true);
    }
  }

  const handleBirthDate2 = (e) => {
    const date = e.target.value;
    if (date) {
      const finalDate = moment(date).format("YYYY-MM-DD");
      setBirthDate(finalDate);
      setErrorBirth(false);
      setBirthFailed(false);
      console.log(finalDate);
    } else {
      setErrorBirth(true);
    }
  }

  function handleGenderChange(event) {
    const genderValue = event.target.value;
    if (genderValue === "M" || genderValue === "F") {
      setGender(genderValue);
      setErrorGender(false);
      setFailedGender(false);
    } else {
      setErrorGender(true);
    }
  }

  function handlePhoneChange(event) {
    const phoneValue = event.target.value;
    if (phoneValue.match(/^\d{11,11}$/)) {
      setPhone(phoneValue);
      setErrorPhone(false);
      setFailedPhone(false);
    } else {
      setErrorPhone(true);
    }
  }

  function handleNameChange(event) {
    const nameVal = event.target.value;
    if (nameVal.match(/^[a-z0-9 A-Z_-]{3,15}$/) && nameVal[0].match(/^[a-zA-Z_-]{1,1}$/)) {
      setName(nameVal);
      setErrorName(false);
      setFailedName(false);
    } else {
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
        name: name,
        phone: phone,
        birth: birthDate,
        gender: gender,
      }).then((response) => {
        props.history.push('/login');
      })
    } else {
      if (errorPassword || errorConfirmPassword) {
        setFailedPassword(true);
      }
      if (errorName) {
        setFailedName(true);
      }
      if (errorPhone) {
        setFailedPhone(true);
      }
      if (errorGender) {
        setFailedGender(true);
      }
      if (errorBirth) {
        setBirthFailed(true);
      }
      props.history.push('/SetupAccount');
    }
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!errorName && !errorPassword && !errorConfirmPassword &&
        !errorBirth && !errorGender && !errorPhone) {
        axios.post('/api/accounts/register/', {
          email: localStorage.getItem('email'),
          password: password,
          name: name,
          phone: phone,
          birth: birthDate,
          gender: gender,
        }).then((response) => {
          props.history.push('/login');
        })
      } else {
        if (errorPassword || errorConfirmPassword) {
          setFailedPassword(true);
        }
        if (errorName) {
          setFailedName(true);
        }
        if (errorPhone) {
          setFailedPhone(true);
        }
        if (errorGender) {
          setFailedGender(true);
        }
        if (errorBirth) {
          setBirthFailed(true);
        }
        props.history.push('/SetupAccount');
      }
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      <ThemeProvider theme={theme}>
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
                variant="standard"
                label={t('userName')}
                required
                onChange={handleNameChange}
                error={errorName}
                onKeyPress={handleEnterClick}
              />
              {failedName &&
                <p style={{ color: "red", marginBottom: "5px" }}>
                  {t('userNameError')}
                </p>
              }
              <FormControl
                className={styles.content}
                required
                variant="standard"
              >
                <InputLabel
                  color={errorPassword ? "secondary" : "primary"}
                  required htmlFor="standard-adornment-password"
                >
                  {t('password')}
                </InputLabel>
                <Input
                  id="standard-adornment-password"
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
                variant="standard"
              >
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color={errorConfirmPassword ? "secondary" : "primary"}
                >
                  {t('confirm_Password')}
                </InputLabel>
                <Input
                  id="standard-adornment-password"
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
              {(failedPassword) && (
                <p style={{ color: "red", marginBottom: "5px" }}>
                  {t('eightcharcter')}
                </p>
              )}
              <TextField
                className={styles.content}
                onChange={handlePhoneChange}
                onKeyPress={handleEnterClick}
                variant="standard"
                required
                label={t('number')}
                type="tel"
                error={errorPhone}
              />
              {failedPhone &&
                <p style={{ color: "red", marginBottom: "5px" }}>
                  {t('phoneError')}
                </p>
              }
              <div>
                <p
                  style={{
                    float: "left",
                    clear: "both",
                    //width: "100px",
                    fontWeight: "bold",
                    padding: "0px"
                  }}
                >
                  {t('myBirthDate')}
                </p>
                <DatePickerComponent
                  placeholder={t('myBirthDate')}
                  //value={dateValue}
                  onChange={handleBirthDate2}
                  max={new Date(moment())}
                />
                {(failedBirth) && (
                  <p style={{ color: "red", marginBottom: "5px" }}>
                    {t('birthError')}
                  </p>
                )}
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
              {failedGender &&
                <p style={{ color: "red", marginBottom: "5px" }}>
                  {t('genderError')}
                </p>
              }
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
      </ThemeProvider>
    </div>
  );
}

export default connect()(SetupAccount);