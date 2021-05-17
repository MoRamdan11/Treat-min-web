import React from "react";
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
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CallIcon from "@material-ui/icons/Call";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { NavBtn2, NavBtnLink2 } from "../navbar/NavBarElement";
import { Grid } from "@material-ui/core";
import { WifiOutlined } from "@material-ui/icons";
import TvIcon from "@material-ui/icons/Tv";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import KitchenIcon from "@material-ui/icons/Kitchen";
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeSpecialRoom } from "../../Redux/actions/specialRooms";
import { useTranslation, initReactI18next } from "react-i18next";
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
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  avatar: {
    backgroundColor: "#19A25D",
    width: theme.spacing(7),
    height: theme.spacing(7),
    alignmentBaseline: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: 12,
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
  services: {
    color: "	#00b300",
    textColor: "	#00b300",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    width: "100%",
    padding: "10px",
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
  service: {
    textAlign: "center"
  },
  seviceGrid: {
    textAlign: "center"
  },
  deleteIcon: {
    color: "#f05454"
  }
}));

const OutlinedCard = ({
  id,
  avatar,
  room,
  hospital,
  rating,
  waiting,
  price,
  callus,
  dispatch,
  services:{
    wifi,
    beds,
    tv,
    fridge
  }
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleDate = (event) => {
    setDate(event.target.value);
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
  const handleDeleteCLick = () => {
    dispatch(removeSpecialRoom({id}));
  }
  var gridDivider = 0;
  gridDivider = beds >= 1? gridDivider + 1 : gridDivider;
  gridDivider = wifi? gridDivider + 1 : gridDivider;
  gridDivider = tv ?  gridDivider + 1 : gridDivider;
  gridDivider = fridge? gridDivider + 1: gridDivider;
  console.log(gridDivider);
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
          <IconButton aria-label="settings">
            <DeleteIcon 
              fontSize = "large" 
              className = {classes.deleteIcon}
              onClick = {handleDeleteCLick}
            />
          </IconButton>
        }
      />
      <CardContent>
        <h1 className={classes.title} color="textSecondary" gutterBottom>
          {room} {t('room')} 
        </h1>
        <Typography className={classes.pos}>{hospital} {t('hospital')} </Typography>
        <IconButton className={classes.GradeIcon} aria-label="settings">
          <GradeIcon />
        </IconButton>
        {rating}
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
              icon={<EventAvailableOutlinedIcon />}
              label={t('service')} 
            />
            <Tab className={classes.Tab} icon={<LocalAtmIcon />} label={t('fees')}  />
            <Tab className={classes.Tab} icon={<CallIcon />} label={t('calus')}  />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container className = "seviceGrid">
              {gridDivider === 0 && <Grid item xs={12} sm={12} md={12} lg={12} >
                    <h3 style = {{ margin: "0 auto 0 auto", color: "#f05454"}}>{t('servicenotavaliable')} </h3>
                    </Grid>
              }
              {beds > 0 && <Grid item xs={12 / gridDivider}>
                <Button
                  startIcon={<SingleBedIcon />}
                  className={classes.services}
                >
                  {beds} {t('bed')} 
                </Button>
              </Grid>}
              {wifi && <Grid item xs={12 / gridDivider}>
                <Button
                  startIcon={<WifiOutlined />}
                  className={classes.services}
                >
                {t('wifi')} 
                </Button>
              </Grid>
              }
              {tv && <Grid item xs={12 / gridDivider}>
                <Button startIcon={<TvIcon />} className={classes.services}>
                {t('tv')} 
                </Button>
              </Grid>
              }
              {fridge && <Grid item xs={12 / gridDivider}>
                <Button
                  startIcon={<KitchenIcon />}
                  className={classes.services}
                >
                {t('fridge')} 
                </Button>
              </Grid>
              }
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {price} {t('le')} 
          </TabPanel> 
          <TabPanel value={value} index={2}>
            {callus}
          </TabPanel>
        </Paper>
      </CardContent>
    </Card>
  );
};
export default connect()(OutlinedCard);
