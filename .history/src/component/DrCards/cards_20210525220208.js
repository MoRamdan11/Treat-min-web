import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
//import Button from "@material-ui/core/Button";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { NavBtn3, NavBtnLink3 } from "../navbar/NavBarElement";
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { removeClinic } from "../../Redux/actions/clinics";
import { useTranslation, initReactI18next } from "react-i18next";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";
import { Button } from "../../pages/elements";
import { BookingButton } from "../navbar/NavBarElement";
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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  Card: {
    minWidth: "200",
    hight: "100"
  },
  root: {
    minWidth: "20%",
    hight: "5%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  avatar: {
    backgroundColor: "#19A25D",
    width: theme.spacing(7),
    height: theme.spacing(7),
    alignmentBaseline: "center"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  GradeIcon: {
    color: "#FFD700"
    //backgroundColor:"#FFD700",
  },
  Tab: {
    textColor: "	#00b300",
    indicatorColor: "	#00b300",
    color: "	#00b300",
    minWidth: "20%"
  },
  container: {
    //if we remove style schedules is centered
    /*display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    width: "100%",
    padding: "10px",
    textAlign: "center"*/
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    alignmentBaseline: "Center"
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
    padding: "10%"
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
    alignContent: "center",
    courser: "pointer"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  CardActions: {
    hight: 50
  },
  datePicker: {
    zIndex: 99
  }
}));

const OutlinedCard = ({
  id,
  id_Schedule,
  avatar,
  doctor,
  specalist,
  rating,
  hospital,
  waiting,
  price,
  callus,
  dispatch,
  api
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [avaliableappoinment, setStateavaliableappoinment] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [APopen, setAPOpen] = React.useState(false);
  const [schedules, setSchedules] = React.useState([]);

  useEffect(() => {
    async function getSchedules() {
      const request = await axios.get(`/api/clinics/${api}/details/${id_Schedule}/schedules`).then((response) => {
        setSchedules(response.data.schedules);
      })
    }
    getSchedules();
  }, [])
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const avaliableappoinmenthandleChange = (event) => {
    const avaliableappoinment = event.target.value;
    setStateavaliableappoinment(avaliableappoinment);
    // props.dispatch(setSpeciality(avaliableappoinment));
  };
  const APhandleClose = () => {
    setAPOpen(false);
  };

  const APhandleOpen = () => {
    setAPOpen(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  function handleDeleteCard() {
    dispatch(removeClinic({ id }));
  }
  const handleBooking = (event) => {
    event.preventDefault();
    const schedule = event.target.value;
    axios.post(`/api/clinics/${api}/details/${id_Schedule}/reserve/`, {
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
    }).then((response) => {
      console.log('Booking', response);
    }).catch((error) => {
      console.log('Error', error);
    })
  }
  const { t } = useTranslation();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleDeleteCard}>
            <DeleteIcon fontSize="large" className={classes.deleteIcon} />
          </IconButton>
        }
      />
      <CardContent>
        <h1 className={classes.title} color="textSecondary" gutterBottom>
          {t('dr')}. {doctor.name}
        </h1>
        <Typography>{specalist}</Typography>
        <IconButton className={classes.GradeIcon} aria-label="settings">
          <GradeIcon />
        </IconButton>
        {rating}
        <Typography className={classes.pos} color="textSecondary">
          {t('workat')} {hospital} {t('hospital')}
        </Typography>
        <Paper square className={classes.Tab}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="default"
            textColor="default"
            aria-label="icon label tabs example"
          >
            <Tab
              className={classes.Tab}
              icon={<HourglassEmptyIcon />}
              label={t('time')}
            />
            <Tab className={classes.Tab} icon={<LocalAtmIcon />} label={t('fees')} />
            <Tab className={classes.Tab} icon={<CallIcon />} label={t('calus')} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {waiting}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {price} {t('le')}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {callus}
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
                onOpen={() => { APhandleOpen(id_Schedule) }}
                value={avaliableappoinment}
                onChange={avaliableappoinmenthandleChange}
              >
                <option aria-label={t('none')} value="" />
                {schedules.map((schedule) => {
                  return (<option value={`${schedule.day} ${schedule.start} - ${schedule.end}`}>{`${schedule.day} ${schedule.start} - ${schedule.end}`}</option>);
                })}
              </Select>
            </FormControl>
          </div>
        </form>
      </CardContent>
      <BookingButton onClick={handleBooking}>
        {t('book')}
      </BookingButton>
      {/*<NavBtn3>
        <NavBtnLink3 to="/Book">{t('book')}</NavBtnLink3>
      </NavBtn3>*/}
    </Card>
  );
};

export default connect()(OutlinedCard);
