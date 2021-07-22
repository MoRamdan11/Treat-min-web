import React, { useEffect, useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HistoryIcon from "@material-ui/icons/History";
import Appointment from "./Appointment";
import History from "./History";
import Avatar from "./Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useHistory } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import Globals from "../navbar/global";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
import axios from "axios";
import { matchClincsEn, matchClincsAr } from "../DrCards/Cincs";
import { clinicsEN, clinicsAR } from "../DrCards/clinicsnames";
import cookies from 'js-cookie';
import { ServicesEN, ServicesAR } from "../ServicesCards/service";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});

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
const useStyles = makeStyles({
  root: {
    "body[dir=rtl] &": {
      transform: "scaleX(-1)"
    }
  },
  container: {
    backgroundColor: "#235274",
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
  columnOne: {
    backgroundColor: "#235274",
    display: "flex",
    flexDirection: "column",
    width: "33%",
    marginTop: "2em",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  columnTwo: {
    backgroundColor: "#235274",
    width: "65%",
    margin: "2em 0",
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  mainInfo: {
    position: "relative",
    backgroundColor: "#FFF",
    borderRadius: "20px 20px 0 0",
  },
  editBtn: {
    position: "absolute",
    right: "10px",
    top: "10px",
    color: "#19A25D",
  },
  avatar: {
    display: "block",
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: "100px auto 30px auto",
  },
  userName: {
    textAlign: "center",
    fontSize: "16px",
    color: "#19A25D",
    marginBottom: "10px"
  },
  mail: {
    color: "#91c788",
    marginTop: "3px",
    marginBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addInfo: {
    backgroundColor: "#FFF",
    marginTop: "5px",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  addInfo2: {
    height: 60,
    backgroundColor: "#fff",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "0 0 15px 15px",
    "@media screen and (min-width: 769px)": {
      marginBottom: "140px",
    },
  },
  icon: {
    color: "#19a25d",
    marginRight: "0.25em",
    fontSize: 30,
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#19A25D",
    marginLeft: "2em",
  },
  header: {
    margin: "0.75em 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    marginLeft: "1.25em",
    color: "#235274",
  },
  headerIcon: {
    color: "#235274",
    marginRight: "0.25em",
    fontSize: "1.5em",
  },
  showAppSection: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    maxHeight: 240,
    overflow: "auto",
    marginBottom: "1em",
  },
  hideAppSection: {
    display: "none",
  },
  showHistorySection: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    maxHeight: 240,
    overflow: "auto",
    marginBottom: "1em",
  },
  hideHistorySection: {
    display: "none",
  },
  headerBtn: {
    backgroundColor: "#FFF",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative",
    outline: "none",
    border: "none",
    marginBottom: "0.5em",
    "&:hover ": {
      backgroundColor: "#dddddd",
    },
  },
  notch: {
    position: "absolute",
    right: "1em",
  },
  imageWrapper: {
    marginTop: "2em",
    textAlign: "center",
    maxWidth: "800px",
    borderRadius: "20px",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  image: {
    width: "80%",
  },
  addPhoto: {
    position: "absolute",
    top: "30%",
    right: "30%",
  },
  ArrowDropDownIcon: {
    root: {
      "body[dir=rtl] &": {
        transform: "scaleX(-1)"
      }
    }
  },
  ArrowDropUpIcon: {
    root: {
      "body[dir=rtl] &": {
        transform: "scaleX(-1)"
      }
    }
  }

});
function Account(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const [appIsOpen, setAppIsOpen] = useState(false);
  const [historyIsOpen, setHistoryIsOpen] = useState(false);
  const [clinicsAppointments, setClinicsAppointments] = useState([]);
  const [servicesAppointments, setServicesAppointments] = useState([]);
  const [historyClinics, setHistoryClinics] = useState([]);
  const [historyServices, setHistoryServices] = useState([]);
  useEffect(() => {
    function getAppointments() {
      const data = axios.get('/api/user/appointments/', {
        headers: {
          'Authorization': 'Token ' + localStorage.getItem('token')
        }
      }).then((response) => {
        setClinicsAppointments(response.data.current.clinics);
        setServicesAppointments(response.data.current.services);
        setHistoryClinics(response.data.past.clinics);
        setHistoryServices(response.data.past.services);
      })
    }
    getAppointments();
  }, [])
  const handleHistory = () => {
    setHistoryIsOpen(!historyIsOpen);
  };
  const handleApp = () => {
    setAppIsOpen(!appIsOpen);
  };

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <div className={classes.columnOne}>
              <div className={classes.mainInfo}>
                <IconButton
                  className={classes.editBtn}
                  aria-label="Edit"
                  title={t('edit')}
                  onClick={() => history.push("/EditUserInfo")}
                >
                  <EditIcon />
                </IconButton>
                <Avatar id={props.auth.id} name={props.auth.name} />

                <h1 className={classes.userName} color="textSecondary" gutterBottom>
                  {props.auth.name}
                </h1>
                {/*<Typography className={classes.mail}>
                  <LocationOnIcon className={classes.icon} />
                  {t('asu')}
                </Typography>*/}
              </div>
              <div className={classes.addInfo}>
                <p className={classes.info}>
                  <PhoneIcon className={classes.icon} />
                  +20 {props.auth.phone}
                  {/*http://www.treat-min.com/media/photos/users/27.png*/}
                </p>
              </div>
              <div className={classes.addInfo2}>
                <p className={classes.info}>
                  <EmailIcon className={classes.icon} />
                  {props.auth.email}
                </p>
              </div>
            </div>
            <div className={classes.columnTwo}>
              <button className={classes.headerBtn} style = {{backgroundColor: appIsOpen && "#bdbdbd"}} onClick={handleApp}>
                <h3 className={classes.header}>
                  <CalendarTodayIcon className={classes.headerIcon} /> {t('appoinment')}
                  {appIsOpen ? (
                    <ArrowDropUpIcon className={classes.notch} />
                  ) : (
                    <ArrowDropDownIcon className={classes.notch} />
                  )}
                </h3>
              </button>
              <div
                className={
                  appIsOpen ? classes.showAppSection : classes.hideAppSection
                }
              >
                {clinicsAppointments.map((appointment) => {
                  return (
                    <Appointment
                      key={appointment.id}
                      drName={appointment.doctor}
                      service={currentLanguage.dir ? `${clinicsAR[appointment.clinic]} - ${matchClincsAr[appointment.hospital]}` : `${clinicsEN[appointment.clinic]} - ${matchClincsEn[appointment.hospital]}`}
                      date={appointment.appointment_date}
                      time={`${appointment.schedule.start} - ${appointment.schedule.end}`}
                      state={appointment.status}
                      appointmentId={appointment.id}
                      type="clinics"
                    />);
                })}
                {servicesAppointments.map((service) => {
                  return (
                    <Appointment
                      key={service.id}
                      //drName={appointment.doctor}
                      service={currentLanguage.dir ? `${service.service} - ${matchClincsAr[service.hospital]}` : `${service.service} - ${matchClincsEn[service.hospital]}`}
                      date={service.appointment_date}
                      time={`${service.schedule.start} - ${service.schedule.end}`}
                      type="services"
                      appointmentId={service.id}
                    />);
                })
                }
              </div>
              <button className={classes.headerBtn} style = {{backgroundColor: historyIsOpen && "#bdbdbd"}} onClick={handleHistory}>
                <h3 className={classes.header}>
                  <HistoryIcon className={classes.headerIcon} /> {t('history')}
                  {historyIsOpen ? (
                    <ArrowDropUpIcon className={classes.notch} />
                  ) : (
                    <ArrowDropDownIcon className={classes.notch} />
                  )}
                </h3>
              </button>
              <div
                className={
                  historyIsOpen
                    ? classes.showHistorySection
                    : classes.hideHistorySection
                }
              >
                {historyClinics.map((appointment) => {
                  return (
                    <History
                      key={appointment.id}
                      drName={appointment.doctor}
                      service={currentLanguage.dir ? `${clinicsAR[appointment.clinic]} - ${matchClincsAr[appointment.hospital]}` : `${clinicsEN[appointment.clinic]} - ${matchClincsEn[appointment.hospital]}`}
                      date={appointment.appointment_date}
                      time={`${appointment.schedule.start} - ${appointment.schedule.end}`}
                      state={appointment.status}
                      entityId={appointment.clinic_id}
                      detailId = {appointment.clinic_detail_id}
                      type="clinics"
                    />);
                })}
                {historyServices.map((service) => {
                  return (
                    <History
                      key={service.id}
                      //drName={appointment.doctor}
                      service={currentLanguage.dir ? `${ServicesAR[service.service]} - ${matchClincsAr[service.hospital]}` : `${ServicesEN[service.service]} - ${matchClincsEn[service.hospital]}`}
                      date={service.appointment_date}
                      time={`${service.schedule.start} - ${service.schedule.end}`}
                      type="services"
                      entityId={service.id}
                      detailId = {service.service_detail_id}
                    />);
                })
                }
              </div>
              <div className={classes.imageWrapper}>
                <img
                  className={classes.image}
                  src={require("./book.png").default}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

      </ThemeProvider>
    </StylesProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Account);
