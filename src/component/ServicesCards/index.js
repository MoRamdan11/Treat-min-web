import React from "react";
import OutlinedCard from "./card";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogSelect from "./xsFilter";
import Filter from "./Filter";
import { connect } from "react-redux";
import getVisibleServices from "../../Redux/selectors/services";
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
const ServicesCard = (props) => {
  const theme = useTheme();
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {props.services.length === 0 && <img className={classes.imgStyle} src={require('../../images/404 Error-bro.svg').default} />}
        {props.services.map((service, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Paper className={classes.paper}>
                <OutlinedCard {...service} />
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
      {props.services.length === 0 && <img className={classes.imgStyle} src={require('../../images/404 Error-bro.svg').default} />}
      {props.services.map((service, index) => {
        return (
          <div>
            <OutlinedCard key={index} {...service} />
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
  return {
    services: getVisibleServices(state.services, state.filterServices)
  }
}
export default connect(mapStateToProps)(ServicesCard);
