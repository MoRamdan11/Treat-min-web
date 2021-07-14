import React, { useEffect } from "react";
import OutlinedCard from "./card";
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogSelect from "./xsFilter";
import Filter from "./Filter";
import { connect } from "react-redux";
import getVisibleServices from "../../Redux/selectors/services";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import Globals from "../navbar/global";
import SearchNotFound from "../SearchNotFound";
import { setSideBar } from "../../Redux/actions/filterClinics";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: Globals.direction,
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#235274",
  },
  paper: {
    MozBorderRadius: 500,
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius:"50px",
  },
  filterContainer:{
    backgroundColor:"white" ,
    textAlign:"center"
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
  useEffect(() => {
    window.scrollTo(0, 0);
    props.dispatch(setSideBar(false));
  }, [])
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {props.services.length === 0 && <SearchNotFound />}
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
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div className={classes.root}>
    <div className={classes.filterContainer}>
      <DialogSelect />
      </div>
      {props.services.length === 0 && <SearchNotFound />}
      {props.services.map((service, index) => {
        return (
          <div>
            <OutlinedCard key={index} {...service} />
          </div>
        );
      })}
    </div>
    </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div className={classes.root}>
      <Filter />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      ;
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    services: getVisibleServices(state.services, state.filterServices)
  }
}
export default connect(mapStateToProps)(ServicesCard);
