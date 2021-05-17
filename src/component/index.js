import React from "react";
import OutlinedCard from "./cards";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Filter from "./Filter";
import DialogSelect from "./xsFilter";
import {
  drone,
  drtwo,
  drthree,
  drfour,
  drfive,
  drsix,
  drseven,
  dreight,
  drnine
} from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    MozBorderRadius: 200,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const DrCard = () => {
  const theme = useTheme();
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {" "}
            <OutlinedCard {...drone} />{" "}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...drtwo} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...drthree} />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {" "}
            <OutlinedCard {...drfour} />{" "}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...drfive} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...drsix} />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {" "}
            <OutlinedCard {...drseven} />{" "}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...dreight} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard {...drnine} />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return IsMobile ? (
    <div>
      <DialogSelect {...drone} />
      <div>
        <OutlinedCard {...drtwo} />
      </div>
      <div>
        <OutlinedCard {...drthree} />
      </div>
      <div>
        <OutlinedCard {...drfour} />
      </div>
      <div>
        <OutlinedCard {...drfive} />
      </div>
      <div>
        <OutlinedCard {...drsix} />
      </div>
      <div>
        <OutlinedCard {...drseven} />
      </div>
      <div>
        <OutlinedCard {...dreight} />
      </div>
      <div>
        <OutlinedCard {...drnine} />
      </div>
    </div>
  ) : (
    <div className={classes.root}>
      <Filter />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow3 />
        </Grid>
      </Grid>
    </div>
  );
};
export default DrCard;
