import React, { useState } from "react";
import NavBar from "../component/navbar/index";
import { NavBtn, NavBtnLink } from "../component/navbar/NavBarElement";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import Footer from "../component/navbar/Footer/Footer";
import { btnStyle, newStyle } from "./loginElements";
import { useTranslation, initReactI18next } from "react-i18next";
import {
  GridContainer,
  GridImg,
  SignUpImg,
  GridForm,
  SignUpForm,
  TextField2,
  FormControl2,
  BirthFiled,
  GenderLabel,
  FormControlLabel2
} from "./signUpElements";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  content: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "250px"
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
    marginBottom: "15px"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19a25d"
    }
  }
});
const { t } = useTranslation();

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.hnadlePasswordChange = this.hnadlePasswordChange.bind(this);
        this.hnadleConfirmPasswordChange = this.hnadleConfirmPasswordChange.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            visibility: false,
            day: 1,
            errorDay: false,
            month: 1,
            errorMonth: false,
            year: 2000,
            errorYear: false,
            gender: 'male'
        }
    };
    
    handleEmailChange(event){
        const email = event.target.value;
        this.setState(() => ({email}));
    }
    hnadlePasswordChange(event){
        const password = event.target.value;
        this.setState(() => ({password}));
    }
    hnadleConfirmPasswordChange(event){
        const confirmPassword = event.target.value;
        this.setState(() => ({confirmPassword}));
    }
    handleVisibility(){
        this.setState((prevState) => ({visibility: !prevState.visibility}));
    }
    handleDayChange(event){
        const day = event.target.value;
        if(day.match(/^\d{1,2}/)){
            this.setState(()=>({day}))
        }
    }
    handleMonthChange(event){
        const month = event.target.value;
        if(month.match(/^\d{1,2}/)){
            this.setState(()=>({month}));
        }
    }
    handleYearChange(event){
        const year = event.target.value;
        if(year.match(/^\d{4,4}/)){
            this.setState(()=>({year}));
        }
    }
    handleGenderChange(event){
        const gender = event.target.value;
        this.setState(()=>({gender}))
    }
    
    render() {
        return (
        <div>
            <NavBar />
            <ThemeProvider theme={theme}>
            <GridContainer container>
                <GridImg xs={12} sm={12} md={6} lg={6}>
                <SignUpImg
                    src={require("../../images/Add User-amico.png").default}
                    alt="Sign-Up"
                />
                </GridImg>
                <GridForm xs={12} sm={12} md={6} lg={6}>
                <SignUpForm>
                    <h2 style={{ marginTop: "10px" }}>Create Your Account</h2>
                    <TextField2
                    onChange={this.handleEmailChange}
                    variant="outlined"
                    label={t('email')}
                    required
                    />
                    <FormControl2
                    required
                    variant="outlined"
                    >
                        <InputLabel onChange = {this.hnadlePasswordChange} required htmlFor="outlined-adornment-password">
                        {t('password')}
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.visibility ? "text" : "password"}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={this.handleVisibility}
                                >
                                {this.state.visibility ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl2>
                    <FormControl2
                    required
                    variant="outlined"
                    >
                    <InputLabel onChange = {this.hnadleConfirmPasswordChange} required htmlFor="outlined-adornment-password">
                    {t('confirm_Password')}
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={this.state.visibility ? "text" : "password"}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={this.handleVisibility}
                            >
                            {this.state.visibility ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    </FormControl2>
                    <div>
                    <p
                        style={{
                        marginLeft: "25px",
                        width: "100px",
                        fontWeight: "bold"
                        }}
                    >
                    {t('date')}
                    </p>
                    <BirthFiled
                        onChange={this.handleDayChange}
                        variant="outlined"
                        label="Day"
                        placeholder="dd"
                        required
                        error={this.state.errorDay}
                    />
                    <BirthFiled
                        onChange={this.handleMonthChange}
                        variant="outlined"
                        label="Month"
                        placeholder="mm"
                        required
                        error={this.state.errorMonth}
                    />
                    <BirthFiled
                        onChange={this.handleYearChange}
                        variant="outlined"
                        label="Year"
                        placeholder="yyyy"
                        required
                        error={this.state.errorYear}
                    />
                    </div>
                    <FormControl component="fieldset">
                    <GenderLabel component="legend">
                    {t('gender')}
                    </GenderLabel>
                    <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        onChange = {this.handleGenderChange}
                    >
                        <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label={t('male')}
                        />
                        <FormControlLabel2
                        value="female"
                        control={<Radio color="primary" />}
                        label={t('female')}
                        />
                    </RadioGroup>
                    </FormControl>
                    <div style={btnStyle}>
                    <NavBtn >
                        <NavBtnLink to="/">{t('send_ver_code')}</NavBtnLink>
                    </NavBtn>
                    </div>
                </SignUpForm>
                </GridForm>
            </GridContainer>
            <Footer />
            </ThemeProvider>
        </div>
        );
    }
}
export default SignUp;