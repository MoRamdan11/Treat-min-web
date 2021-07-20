import React, { useEffect, useState } from "react";
import OutlinedCard from "./cards";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Filter from "./Filter";
import DialogSelect from "./xsFilter";
import { connect } from "react-redux";
import getVisibleClinics from "../../Redux/selectors/clinics";
import SearchNotFound from "../SearchNotFound";
import { setSideBar } from "../../Redux/actions/filterClinics";
import { useTranslation, initReactI18next } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#235274",

  },
  paper: {
    MozBorderRadius: 500,
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: "50px"
  },
  filterContainer: {
    backgroundColor: "white",
    textAlign: "center"
  },
  grid: {
    paddingBottom: "20px",
  },
  imgStyle: {
    "@media screen and (min-width: 1100px)": {
      width: "500px",
      textAlign: "center",
      margin: "0 auto 0 auto"
    }
  }
}));
let arrayForHoldingCards = [];
const cardsPerPage = 20;
const DrCard = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
    props.dispatch(setSideBar(false));
  }, [])

  

  const theme = useTheme();
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();


  const [cardsToShow, setCardsToShow] = useState([]);
  const [next, setNext] = useState(20);

  const loopCardsWithSlice = (start, end) => {
    const sliciedCards = props.clinics.slice(start, end);
    arrayForHoldingCards = [...arrayForHoldingCards, ...sliciedCards];
    setCardsToShow(arrayForHoldingCards);
  }

  const handleShowMoreCards = () => {
    loopCardsWithSlice(next, next + cardsPerPage);
    setNext(next + cardsPerPage);
  };
  useEffect(() => {
    loopCardsWithSlice(0, cardsPerPage);
    arrayForHoldingCards = [];
    loopCardsWithSlice(0, cardsPerPage);
    setNext(20);
  }, [props.clinics]);
  function Form() {
    return (
      <React.Fragment>
        {props.clinics.length === 0 && <SearchNotFound />}
        {cardsToShow.map((doc, index) => {
          return (
            <Grid className={classes.root} item xs={4} key={index}>
              <Paper className={classes.paper}>
                <OutlinedCard {...doc} />
              </Paper>
            </Grid>
          );
        })}
        <div style = {{display: "block", width: "100%", textAlign:"center"}}>
          <button onClick={handleShowMoreCards}>{t('moreClinics')}</button>
        </div>
      </React.Fragment>
    );
  }

  return IsMobile ? (
    <div className={classes.root}>
      <div className={classes.filterContainer}>
        <DialogSelect />
      </div>
      {props.clinics.length === 0 && <SearchNotFound />}
      {cardsToShow.map((doc, index) => {
        return (
          <div key={index}>
            <OutlinedCard {...doc} />
          </div>
        );
      })}
      <div>
        <button onClick={handleShowMoreCards}>{t('moreClinics')}</button>
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <Filter />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clinics: getVisibleClinics(state.clinics, state.filterClinics)
  }
}
export default connect(mapStateToProps)(DrCard);
