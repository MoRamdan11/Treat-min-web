import React from "react";
import OutlinedCard from "./cards";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogSelect from "./xsFilter";
import Footer from "../navbar/Footer/Footer";
import Filter from "./Filter";
import getVisibleSpecialRooms from "../../Redux/selectors/specialRooms";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    MozBorderRadius: 500,
    padding: theme.spacing(1),
    textAlign: "center"
  },
  imgStyle: {
    "@media screen and (min-width: 1100px)": {
      width: "500px",
      textAlign: "center",
      margin: "0 auto 0 auto"
    }
  }
}));
const SpecialRoomsCard = (props) => {
  const theme = useTheme();
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {props.specialRooms.length === 0 && <img className={classes.imgStyle} src={require('../../images/404 Error-bro.svg').default} />}
        {props.specialRooms.map((room, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Paper className={classes.paper}>
                <OutlinedCard {...room} />
              </Paper>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return IsMobile ? (
    <div>
      <DialogSelect />
      {props.specialRooms.length === 0 && <img className={classes.imgStyle} src={require('../../images/404 Error-bro.svg').default} />}
      {props.specialRooms.map((room, index) => {
        return (
          <div>
            <OutlinedCard key={index} {...room} />
          </div>
        );
      })}
    </div>
  ) : (
    <div className={classes.root}>
      <Filter />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    specialRooms: getVisibleSpecialRooms(state.specialRooms, state.filterSpecialRooms)
  }
};
export default connect(mapStateToProps)(SpecialRoomsCard);