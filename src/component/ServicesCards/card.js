import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { CardHeader, Paper, Tabs } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GradeIcon from "@material-ui/icons/Grade";
import Tab from "@material-ui/core/Tab";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CallIcon from "@material-ui/icons/Call";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { NavBtn3, NavBtnLink3 } from "../navbar/NavBarElement";
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeService } from "../../Redux/actions/services";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider } from "styled-components";
import { BookingButton } from "../navbar/NavBarElement";
import HomeIcon from '@material-ui/icons/Home';
import {
  NavBtn,
  NavBtnLink55
} from "../../pages/elements";
//Picker Imports
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from "moment";
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ar';
import { matchDays, matchDaysAr, dayIndex, dayIndex2 } from "../DrCards/days";
import axios from "axios";
import { matchClincsEn, matchClincsAr, matchAddressEn, matchAddressAr } from "../DrCards/Cincs"
import { ServicesEN, ServicesAR } from "./service"
import cookies from 'js-cookie';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: Globals.direction,
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "20%",
    textAlign: "center",
    borderRadius: "50px",
    boxShadow: "none"

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  avatar: {
    backgroundColor: "#e1e5ea",
    width: theme.spacing(8),
    height: theme.spacing(8),
    alignmentBaseline: "center"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  GradeIcon: {
    color: "#FFD700",
    //backgroundColor:"#FFD700",
  },
  Tab: {
    textColor: "	#00b300",
    indicatorColor: "	#00b300",
    color: "	#00b300",
    minWidth: "20%",
  },
  container: {
    /*
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    width: "100%",
    padding: "10px",*/
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    alignmentBaseline: "Center",
  },
  button: {
    radius: "500",
    display: "oval",
    marginTop: theme.spacing(1),
    color: "	#ffffff",
    backgroundColor: "	#19A25D",
    width: "80%",
    margin: "10%",
    //width: "30%",
    padding: "10%",
  },
  deleteButton: {
    color: "#19A25D"
  },
  deleteIcon: {
    color: "#f05454"
  },
  formControl: {
    backgroundColor: "primary",
    margin: theme.spacing(4),
    minWidth: 250,
    display: "25%",
    alignContent: "center"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  CardActions: {
    hight: 50
  },
}));
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
const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const OutlinedCard = ({
  auth,
  id,
  avatar,
  service,
  hospital,
  rating,
  waiting,
  price,
  callus,
  dispatch,
  rating_total,
  rating_users,
  schedules,
  api,
  id_Schedule
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [APopen, setAPOpen] = React.useState(false);
  const [avaliableappoinment, setStateavaliableappoinment] = React.useState("");
  const [errorSelector, setErrorSelector] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("");
  const [errorPicker, setErrorPicker] = React.useState(false);
  const [locale, setLocale] = React.useState('en');
  const [daysOfWeek, setDaysOfWeek] = React.useState([]);
  const [appointmentId, setAppointmentId] = React.useState(0);
  const [failedReserve, setFailedReserve] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState(false);
  const [accept, setAccept] = React.useState(false);
  const defaultWeekDays = [0, 1, 2, 3, 4, 5, 6];
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleOptionClick = (event) => {
    const id = event.target.id;
    setAppointmentId(id);
  }
  const avaliableappoinmenthandleChange = (event) => {
    setAccept(false);
    setDaysOfWeek(defaultWeekDays);
    setSelectedDate("");
    setErrorSelector(false);
    setFailedReserve(false);
    const avaliableappoinment = event.target.value;
    if (avaliableappoinment === '') {
      setErrorPicker(false);
    }
    setStateavaliableappoinment(avaliableappoinment);
    const array = defaultWeekDays.filter((day) => {
      return day !== (currentLanguage.dir ? dayIndex2[avaliableappoinment] : dayIndex[avaliableappoinment]);
    });
    setDaysOfWeek(array);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const APhandleClose = () => {
    setAPOpen(false);
  };

  const APhandleOpen = () => {
    setAPOpen(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  function handleDeleteCard() {
    dispatch(removeService({ id }));
  };
  function handlePickerChange(event) {
    const value = moment(event).format('YYYY-MM-DD');
    setErrorPicker(false);
    setSelectedDate(value);
  }
  function handleSelectChange(e) {
    const locale = e.target.value;
    setLocale(locale);
  }
  const handleBooking = (event) => {
    event.preventDefault();
    if (auth.isLogin === false) {
      setErrorLogin(true);
      return;
    }
    if (avaliableappoinment === "") {
      setErrorSelector(true);
      return;
    }
    if (selectedDate === "") {
      setErrorPicker(true);
      return;
    }

    axios.post(`/api/services/${api}/details/${id_Schedule}/reserve/`, {
      schedule: `${appointmentId}`,
      appointment_date: `${selectedDate}`
    },
      {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      }).then((response) => {
        setFailedReserve(false);
        setAccept(true);
        setStateavaliableappoinment('');
      }).catch((error) => {
        setFailedReserve(true);
      })
  }
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar alt={avatar} src={require(`./services/favicon.png`).default} aria-label="recipe" className={classes.avatar} />
            }
          />
          <CardContent>
            <h1 className={classes.title} color="textSecondary" gutterBottom>
              {service}
            </h1>
            <Typography>{(currentLanguage.dir ? `${matchClincsAr[hospital.name]} ` : `${matchClincsEn[hospital.name]}`) || hospital.name} </Typography>
            {(rating_total / rating_users) || 0}
            <IconButton className={classes.GradeIcon} aria-label="settings">
              <GradeIcon />
            </IconButton>

            <Paper square className={classes.Tab}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="default"
                textColor="default"
                aria-label="icon label tabs example"
              >
                <Tab className={classes.Tab} icon={<LocalAtmIcon />} label={t('fees')} />
                <Tab className={classes.Tab} icon={<HomeIcon />} label={t('address')} />
                <Tab className={classes.Tab} icon={<CallIcon />} label={t('calus')} />
              </Tabs>
              <TabPanel value={value} index={0}>
                {price} {t('le')}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {currentLanguage.dir ? `${matchAddressAr[hospital.name]} ` : `${matchAddressEn[hospital.name]}`}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {hospital.phone}
              </TabPanel>
            </Paper>
            <form className={classes.container} noValidate>
              <div style={{ textAlign: "center" }}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple" >
                    {t('avaliableappoinment')}
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select1"
                    open={APopen}
                    onClose={APhandleClose}
                    onOpen={APhandleOpen}
                    value={avaliableappoinment}
                    onChange={avaliableappoinmenthandleChange}
                  >
                    <MenuItem value="" data-id="2">
                      <em>{t('none')}</em>
                    </MenuItem>
                    {schedules.map((schedule) => {
                      return (
                        <MenuItem
                          onClick={handleOptionClick}
                          key={schedule.id}
                          value={currentLanguage.dir ? `${matchDaysAr[schedule.day]}` : `${matchDays[schedule.day]}`}
                          id={schedule.id}
                        >
                          {currentLanguage.dir ? `${matchDaysAr[schedule.day]} ${schedule.start} - ${schedule.end}` : `${matchDays[schedule.day]} ${schedule.start} - ${schedule.end}`}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {(avaliableappoinment !== '' && auth.isLogin && !accept) &&
                  <div style={{ backgroundColor: "#caf7e3", borderRadius: "20px", textAlign: "center" }}>
                    {/*edffec*/}
                    <h3>{t('pickappointment')}</h3>
                    <div style={{ backgroundColor: "#93329e",  padding: "10px" }}>
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
                      inputProps={{ readOnly: true }}
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
                              daysOfWeek: daysOfWeek
                            },
                            {
                              before: new Date(moment())
                            },
                            {
                              //after: new Date(moment('2021-05-30', 'YYYY-MM-DD'))
                            }
                          ]
                        }
                      }}
                    />
                  </div>
                }
              </div>
            </form>
          </CardContent>
          {(!auth.isLogin && avaliableappoinment !== '') &&
            <div style={{
              margin: "20px", padding: "5px",
              backgroundColor: "#caf7e3", display: "flex",
              justifyContent: "center", alignItems: "center",
              marginBottom: "20px", borderRadius: "20px"
            }}>
              <p style={{ color: "red", margin: " 0px", fontWeight: "bold" }}>
                {t('errorreservelogin')}
              </p>
              <NavBtn>
                <NavBtnLink55 to="/SignUp">{t('signup')}</NavBtnLink55>
              </NavBtn>
              <NavBtn>
                <NavBtnLink55 to="/login">{t('login')}</NavBtnLink55>
              </NavBtn>
            </div>
          }
          {(failedReserve && !errorPicker && !errorSelector && !errorLogin && avaliableappoinment !== '') &&
            <div>
              <p style={{ color: "red" }}>
                {t('failedReserve')}
              </p>
            </div>
          }
          {(errorPicker && !errorSelector && !errorLogin) &&
            <div>
              <p style={{ color: "red" }}>
                {t('errorpicker')}
              </p>
            </div>
          }
          {errorSelector && !errorLogin &&
            <div>
              <p style={{ color: "red", marginTop: "5px" }}>
                {t('errorschedule')}
              </p>
            </div>
          }
          {(accept && !failedReserve) &&
            <div style={{
              margin: "20px", padding: "5px",
              backgroundColor: "#93329e", color: "white",
              marginBottom: "20px", borderRadius: "20px"
            }}>
              <h3>{t('sucessReserve')}</h3>
            </div>
          }
          <BookingButton onClick={handleBooking}>
            {t('book')}
          </BookingButton>
        </Card>
      </StylesProvider>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(OutlinedCard);