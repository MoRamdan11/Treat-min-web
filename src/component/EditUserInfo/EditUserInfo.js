import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import EditAvatar from "./EditAvatar";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Input from '@material-ui/core/Input';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
//import { NavBtn, NavBtnLink, NavBtnLink2 } from "./Buttons";
import { useHistory, NavLink } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/actions/Auth";
//Picker Imports
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from "moment";
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ar';
import axios from "axios";
import {
  GridContainer,
  Img,
  GridForm,
  Form,
  NavBtn,
  Button,
  NavBtnLink2,
  ForgetPassword,
  FindAccount,
  ForgetPasswordAR
} from "./elements";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



const theme = createMuiTheme({
  direction: Globals.direction,
  palette: {
    primary: {
      main: "#19a25d",
    },
    secondary: {
      main: "#F00",
    },
  },
});

const useStyles = makeStyles({
  container: {
    backgroundColor: "#235274",
    height: "auto"
  },
  wrapper: {
    margin: "0 auto",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      width: "90%",
    },
    "@media screen and (max-width: 1000px)": {
      fontSize: "12px",
    },
  },
  datePicker: {
    zIndex: "99",
  },
  columnOne: {
    backgroundColor: "#235274",
    display: "flex",
    flexDirection: "column",
    width: "55%",
    marginTop: "2em",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  columnTwo: {
    backgroundColor: "#FFF",
    width: "35%",
    margin: "3em 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  userInfo: {
    width: "80%",
    backgroundColor: "#FFF",
    margin: "0 auto",
    borderRadius: "20px",
  },
  input: {
    margin: "0.75em auto",
    width: "80%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "5px"
  },
  label: {
    marginTop: "0",
    marginLeft: "1em",
  },
  btnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
    marginLeft: "10px",
  },
  btnStyleOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "15px",
  },
  showLabel: {
    margin: "0 auto",
    color: "red",
  },
  hideLabel: {
    display: "none",
  },
  signUp: {
    color: "blue",
    margin: "1em auto",
  },
});

const name = "Gerges Wageh";
const phone = "01286516312";
const email = "GergesWageh2580@gmail.com";

function EditUserInfo(props) {
  const history = useHistory();
  const classes = useStyles();
  const [errorEmail, setErrorEmail] = useState(false);
  const [userInfo, setUserInfo] = useState({
    errorEmail: false,
    email: props.auth.email,
    birth: props.auth.birth
  })
  const [locale, setLocale] = React.useState('en');
  const [selectedDate, setSelectedDate] = React.useState(userInfo.birth);
  const [phone, setPhone] = useState(props.auth.phone);
  const [errorPhone, setErrorPhone] = useState(false);
  const [failedPhone, setFailedPhone] = useState(false);
  const [name, setName] = useState(props.auth.name);
  const [errorName, setErrorName] = useState(false);
  const [failedName, setFailedName] = useState(false);
  const [errorBirth, setErrorBirth] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const [failedPassword, setFailedPassword] = useState(false);
  const [notAcceptPass, setNotAccPass] = useState(false);
  function handleVisibility() {
    setVisibility((prevValue) => !prevValue);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "email") {
      if (!value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }
    setUserInfo((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleError = () => {
    if (!userInfo.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };
  function handleSelectChange(e) {
    const locale = e.target.value;
    setLocale(locale);
  }
  function handlePickerChange(event) {
    if (event === '') {
      setErrorBirth(true);
      console.log('nodate');
    }
    const value = moment(event).format('YYYY-MM-DD');
    setSelectedDate(value);
  }
  function handlePhoneChange(event) {
    const phoneValue = event.target.value;
    console.log(phoneValue);
    if (phoneValue.match(/^\d{11,11}$/)) {
      setPhone(phoneValue);
      setErrorPhone(false);
      setFailedPhone(false);
    } else {
      setPhone(phoneValue);
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
      setName(nameVal);
      setErrorName(true);
    }
  }
  function hnadlePasswordChange(event) {
    const passwordVal = event.target.value;
    if (passwordVal.length >= 8 && passwordVal.length <= 32 && !passwordVal.match(/^\d{8,32}$/)) {
      setPassword(passwordVal);
      setErrorPassword(false);
      setFailedPassword(false);
      setNotAccPass(false);
    } else {
      setErrorPassword(true);
    }
  }
  const handleBtnClick = (event) => {
    event.preventDefault();
    if (!errorName && !errorPhone && !errorPassword) {
      axios.patch('/api/accounts/edit-account/', {
        password: password,
        name: name,
        phone: phone,
        birth: selectedDate,
        gender: props.auth.gender,
      }, {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      }
      ).then((response) => {
        console.log(response);
        props.dispatch(setUserProfile({
          name: name,
          id: props.auth.id,
          email: props.auth.email,
          phone: phone,
          gender: props.auth.gender,
          birth: selectedDate
        }));
        props.history.push('/MyAccount');
      }).catch((error) => {
        console.log(error.response.data);
        setNotAccPass(true);
      });
    } else {
      if (errorName) {
        setFailedName(true);
      }
      if (errorPhone) {
        setFailedPhone(true);
      }
      if (errorPassword) {
        setFailedPassword(true);
      }
      props.history.push('/EditUserInfo');
    }
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!errorName && !errorPhone && !errorPassword) {
        axios.patch('/api/accounts/edit-account/', {
          password: password,
          name: name,
          phone: phone,
          birth: selectedDate,
          gender: props.auth.gender,
        }, {
          headers: {
            'Authorization': 'Token ' + localStorage.getItem('token')
          }
        }
        ).then((response) => {
          console.log(response);
          props.dispatch(setUserProfile({
            name: name,
            id: props.auth.id,
            email: props.auth.email,
            phone: phone,
            gender: props.auth.gender,
            birth: selectedDate
          }));
          props.history.push('/MyAccount');
        }).catch((error) => {
          console.log(error.response.data);
          setNotAccPass(true);
        });
      } else {
        if (errorName) {
          setFailedName(true);
        }
        if (errorPhone) {
          setFailedPhone(true);
        }
        if (errorPassword) {
          setFailedPassword(true);
        }
        props.history.push('/EditUserInfo');
      }
    }
  }
  const { t } = useTranslation();
  return (
    <StylesProvider jss={jss}>
      <div>
        <ThemeProvider theme={theme}>
          <GridContainer container>
            <Grid xs={12} sm={12} md={6} lg={6}>
              <Img src={require("../../images/EditInfo.png").default} alt="img" />
            </Grid>
            <GridForm xs={12} sm={12} md={6} lg={6}>
              <Form
                onSubmit={(e) => e.preventDefault()}
              >
                {/*<EditAvatar id={props.auth.id} name={props.auth.name} />*/}
                <h2>{t('editinfo')}</h2>
                <FormControl
                  className={classes.input}
                  required
                  variant="standard"
                >
                  <InputLabel
                    color={errorPassword ? "secondary" : "primary"}
                    required htmlFor="standard-adornment-password"
                  >
                    {t('enterPass')}
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={visibility ? "text" : "password"}
                    onChange={hnadlePasswordChange}
                    onKeyPress={handleEnterClick}
                    error={errorPassword}
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
                    labelWidth={120}
                  />
                </FormControl>
                {(failedPassword) && (
                  <p style={{ color: "red", marginBottom: "5px" }}>
                    {t('eightcharcter')}
                  </p>
                )}
                {(notAcceptPass) && (
                  <p style={{ color: "red", marginBottom: "5px" }}>
                    {"Error pass"}
                  </p>
                )}
                <TextField
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  error={errorName}
                  label={t('username')}
                  variant="standard"
                  color="green"
                  onKeyPress={handleEnterClick}
                  className={classes.input}
                />
                {failedName &&
                  <p style={{ color: "red", marginBottom: "5px", textAlign: "center" }}>
                    {t('userNameError')}
                  </p>
                }
                <TextField
                  onChange={handlePhoneChange}
                  value={phone}
                  error={errorPhone}
                  type="tel"
                  name="phone"
                  label={t('number')}
                  variant="standard"
                  color="green"
                  onKeyPress={handleEnterClick}
                  className={classes.input}
                />
                {failedPhone &&
                  <p style={{ color: "red", marginBottom: "5px", textAlign: "center" }}>
                    {t('phoneError')}
                  </p>
                }
                <div style={{ backgroundColor: "#caf7e3", borderRadius: "20px", textAlign: "center" }}>
                  {/*edffec*/}
                  <h3>{t('birthChange')}</h3>
                  <div style={{ backgroundColor: "#93329e", padding: "10px" }}>
                    <h4 style={{ display: "inline", color: "white" }}>{t('pickerlanguage')}: </h4>
                    <select style={{ display: "inline" }} onChange={handleSelectChange}>
                      <option value="en">English</option>
                      <option value="ar">Arabic</option>
                    </select>
                  </div>
                  <DayPickerInput
                    classNames={{
                      overlay: classes.datePicker,
                    }}
                    format="YYYY-MM-DD"

                    value={selectedDate}
                    onDayChange={handlePickerChange}
                    dayPickerProps={{
                      localeUtils: MomentLocaleUtils,
                      locale: locale,
                      selectedDays: selectedDate,
                      modifiers: {
                        disabled: [
                          {
                            after: new Date(moment())
                            //after: new Date(moment('2021-05-30', 'YYYY-MM-DD'))
                          }
                        ]
                      }
                    }}
                  />
                </div>
                <NavLink className={classes.signUp} to="/ChangePassword">
                  {t('changepassword')}
                </NavLink>
                <div className={classes.btnStyleOuter}>
                  <NavBtn>
                    <NavBtnLink2 to="/MyAccount">{t('cancel')}</NavBtnLink2>
                  </NavBtn>
                  <Button
                    onClick={handleBtnClick}
                  >
                    {t('ok')}
                  </Button>
                </div>
              </Form>
            </GridForm>
          </GridContainer>
        </ThemeProvider>
      </div>
    </StylesProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(EditUserInfo);
